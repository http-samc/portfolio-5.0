import SpotifyWebApi from "spotify-web-api-node";

const client = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: "https://smrth.dev",
});

const TOKEN_URL = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  interface TokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  }
  const authorization = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: process.env.SPOTIFY_REFRESH_TOKEN as string,
  });
  const { access_token: accessToken }: TokenResponse = (await fetch(
    `${TOKEN_URL}?${params.toString()}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${authorization}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).then((r) => r.json())) as TokenResponse;

  return accessToken;
};

export async function getSpotifyData() {
  client.setAccessToken(await getAccessToken());

  try {
    const { track } = (await client.getMyRecentlyPlayedTracks()).body.items[0];
    const currentPlayback =
      track && "artists" in track
        ? {
            trackName: track.name,
            artist: track.artists[0].name,
            albumArt: track.album.images[0].url,
          }
        : null;

    const topArtists = (await client.getMyTopArtists()).body.items.map(
      (artist) => ({
        name: artist.name,
        art: artist.images,
        genres: artist.genres,
      })
    );

    return {
      currentPlayback,
      topArtists,
    };
  } catch (error: any) {
    // Check if error is due to expired token
    if (error.statusCode === 401) {
      try {
        // Get new access token
        getAccessToken();

        // Update client with new token
        client.setAccessToken(await getAccessToken());

        // Retry the original request
        const { track } = (await client.getMyRecentlyPlayedTracks()).body
          .items[0];
        const currentPlayback =
          track && "artists" in track
            ? {
                trackName: track.name,
                artist: track.artists[0].name,
                albumArt: track.album.images[0].url,
              }
            : null;

        const topArtists = (await client.getMyTopArtists()).body.items.map(
          (artist) => ({
            name: artist.name,
            art: artist.images,
            genres: artist.genres,
          })
        );

        return {
          currentPlayback,
          topArtists,
        };
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
        throw refreshError;
      }
    }

    console.error("Error fetching Spotify data:", error);
    throw error;
  }
}

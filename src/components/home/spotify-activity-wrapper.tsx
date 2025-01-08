import { getSpotifyData } from "@/lib/spotify";
import SpotifyActivity from "./spotify-activity/component";

const SpotifyActivityWrapper = async () => {
  const data = await getSpotifyData();
  return (
    <SpotifyActivity
      currentPlayback={data.currentPlayback}
      topArtists={data.topArtists}
    />
  );
};

export default SpotifyActivityWrapper;

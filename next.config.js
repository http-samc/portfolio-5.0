/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["cdn.sanity.io", "avatars.githubusercontent.com"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;

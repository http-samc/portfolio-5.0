/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "avatars.githubusercontent.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;

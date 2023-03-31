/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["placehold.co"],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig

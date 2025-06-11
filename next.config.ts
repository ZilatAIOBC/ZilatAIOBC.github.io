// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // async rewrites() {
//   //   return [
//   //     {
//   //       source: "/ingest/static/:path*",
//   //       destination: "https://us-assets.i.posthog.com/static/:path*",
//   //     },
//   //     {
//   //       source: "/ingest/:path*",
//   //       destination: "https://us.i.posthog.com/:path*",
//   //     },
//   //     {
//   //       source: "/ingest/decide",
//   //       destination: "https://us.i.posthog.com/decide",
//   //     },
//   //   ];
//   // },
//   output: "export",
//   // This is required to support PostHog trailing slash API requests
//   // skipTrailingSlashRedirect: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
}

module.exports = nextConfig
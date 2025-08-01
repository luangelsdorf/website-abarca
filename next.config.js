/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/lp/website/desconto',
      },
    ]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            replaceAttrValues: { 'white': 'currentColor' }
          }
        }
      ],
    });

    return config;
  }
});

module.exports = nextConfig

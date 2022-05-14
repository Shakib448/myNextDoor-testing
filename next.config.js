/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/",
        locale: false,
      },
      {
        source: "/fr",
        destination: "/fr",
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;

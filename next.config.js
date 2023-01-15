const nextTranslate = require("next-translate");
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, ".")],
  },
  ...nextTranslate(),
};

module.exports = nextConfig;

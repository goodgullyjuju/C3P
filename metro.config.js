// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  return {
    ...config,
    transformer: {
      ...config.transformer,
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
    resolver: {
      ...config.resolver,
      assetExts: [...config.resolver.assetExts, 'ttf', 'otf', 'woff', 'woff2'],
    },
  };
})();

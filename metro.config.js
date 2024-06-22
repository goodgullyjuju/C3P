// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  // Ensure `cjs` extensions are resolved
  if (config.resolver && config.resolver.sourceExts && Array.isArray(config.resolver.sourceExts)) {
    config.resolver.sourceExts.push('cjs');
  }

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

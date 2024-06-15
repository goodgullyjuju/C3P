module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',{ jsxRuntime: 'automatic' },
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-runtime',
    ],
  };
};

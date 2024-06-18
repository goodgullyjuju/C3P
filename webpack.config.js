const { withExpo } = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await withExpo(env, argv);

  // Customize the config here
  config.devServer = {
    ...config.devServer,
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem',
    },
    host: 'localhost',
    port: 8081, // Ensure this matches the port you want to use
  };

  return config;
};

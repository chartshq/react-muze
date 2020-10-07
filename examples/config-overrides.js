const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = function override(config, env) {
  //add webpack copy plugin
  const copyPlugin = new CopyWebpackPlugin([
    {
      from: path.resolve("node_modules", "@chartshq/muze/dist"),
      to: '.',
    }
  ]);

  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(copyPlugin);

  return config;
}
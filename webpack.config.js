var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const merge = require("webpack-merge");

const commonConfig = require("./build_utils/webpack.common.js");
const productionConfig = require("./build_utils/webpack.prod.js");
const devConfig = require("./build_utils/webpack.dev.js");
const presetConfig = require("./build_utils/loadPresets.js");

const developmentConfig = devConfig({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
});

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode }, presetConfig({ mode, presets }));
  }

  return merge(commonConfig, developmentConfig, { mode }, presetConfig({ mode, presets }));
};

module.exports = ({ host, port } = {}) => {
  return {
    devtool: 'source-map',
    devServer: {
      stats: "errors-only",
      host,
      port,
      open: true,
      overlay: true,
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          }
        ]
    }
  }
};

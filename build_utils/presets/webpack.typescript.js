module.exports = (env) => {
  return {
    module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: "ts-loader"
          }
        ]
    }
  }
}

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: [
            /node_modules/
          ],
          use: {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        }
      ]
    }
  }
}
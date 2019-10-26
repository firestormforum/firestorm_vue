module.exports = {
  parallel: false,
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
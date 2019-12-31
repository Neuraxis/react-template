// shared config (dev and prod)
const { resolve } = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // only enable hot in development
          //     hmr: true,
          //     // if hmr does not work, this is a forceful method.
          //     reloadAll: true,
          //   },
          // },
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            // options: { modules: true, importLoaders: 1 }
            // options: {
            //   importLoaders: 2,
            //   modules: true,
            //   modules: {
            //     localIdentName: '[path][name]__[local]___[hash:base64:5]',
            //   },
            // },
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            // options: {
            //   // Prefer `dart-sass`
            //   implementation: require('sass'),
            // },
          },
        ],
      },
      // {
      //   test: /\.(scss|sass)$/,
      //   loaders: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader', 'sass-loader'],
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CheckerPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html.ejs' }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
}

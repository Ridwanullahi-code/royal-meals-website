const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Royal Meal Project',
      template: 'src/index.html',
      filename: 'index.html',
    }),
    // only update what changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devServer: {
    static: './dist',
    historyApiFallback: true,
    open: true,
    liveReload: true,
    compress: true,
    hot: true,
    port: 5050,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

'use strict';

module.exports = {
  entry: './app/app.module.js',
  devtool: 'source-map',
  output: {
    path: 'dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-es2015-modules-commonjs', 'transform-runtime']
        }
      }
    ]
  }
};
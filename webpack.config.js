const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/javascript/packs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'reactjs-[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$|\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        include: path.resolve(__dirname, './app/javascript/packs')
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: [node_modules]
  },
}

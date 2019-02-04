const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  stats: 'verbose',
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  context: path.resolve(__dirname, 'server'),
  entry: './server.ts',
  devtool: 'source-map',
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new CleanWebpackPlugin(['dist/server']),
    new CopyWebpackPlugin([
      {
        from: './assets',
        to: 'assets',
      }
    ]),
  ],
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    path: path.resolve(__dirname, 'dist/server'),
  },
};

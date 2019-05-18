var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config');

var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log') // strip all console log from code
};

devConfig.module.rules.push(stripLoader);
module.exports = devConfig;
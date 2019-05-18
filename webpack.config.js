const path = require('path');
module.exports = {
  context: path.resolve('js'), // relative path for the entry key, so now entry root folder is the js folder
  entry: ["./utils", "./main"],
  output: {
    path: path.resolve(__dirname, 'dist'), // path where bundle.js will be on disk/source
    publicPath: '/public/assets/js/', // path where bundle.js will be on the server
    filename: "bundle.js"
  },
  devServer: {
    contentBase: 'public' // the path of index.html from where to serve the content
  },
  // to make webpack reload again if changes
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // {
      //   test: /\.js$/,
      //   enforce: "pre",
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "jshint-loader",
      //     }
      //   ]
      // }


      /*
        JshindLoader not supported so far with webpack 4
      */
    ]
  },

  // resolve: {
  //   extensions: ['js', 'es6'], // when importing or requiring module webpack looks
  //   // for js extension and es6 extension as well now
  // }

  /*
    Find alternate of resolve to work with webpack 4
  */
}
var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 


  output: {
    publicPath: '/'
  },
   
  // output: {
  //   path: BUILD_DIR,
  //   filename: 'bundle.js'
  // },
 

  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: [ "babel-loader"]
      },
 
    ]
  },
  
  //debug, es6 to es5 mapping
  devtool: 'source-map',

  plugins: [
      new HtmlWebpackPlugin({
        title: 'My Product App',
        filename: 'index.html', //output file name
        template: './src/index.html' //input file
      })

    
  ],

  devServer: {
    contentBase: APP_DIR,
    compress: true,
    port: 8080,

    historyApiFallback: {
      index: 'index.html'
    }
  }

};

module.exports = config;



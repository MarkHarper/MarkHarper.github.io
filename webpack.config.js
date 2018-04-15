const HtmlWebPackPlugin = require("html-webpack-plugin");
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  output: {
    publicPath: '/',
    filename: 'main.js',
    path: '/dist'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      rewrites: { 
        from: /favicon.ico/, 
        to: './src/favicon.ico' 
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'assets/',
              outputPath: 'assets'
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new FlowBabelWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/favicon.ico"
    })
  ]
};
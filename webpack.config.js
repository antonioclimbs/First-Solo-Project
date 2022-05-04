const path = require('path');
const buildDir = path.resolve(__dirname, './public/build');
const appDir = path.resolve(__dirname, './client');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: appDir + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: buildDir
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    static: {
      directory: 'index.html',
    },
    port: 8080,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx|\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    //   modules: [
    //     path.resolve("./src"),
    //     path.resolve("./node_modules")
    //   ],
    extensions: [".js", ".jsx"]
  }
}
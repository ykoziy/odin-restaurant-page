const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          publicPath: '../'
        }
      },        
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'style/index.min.css'})  
  ]
};
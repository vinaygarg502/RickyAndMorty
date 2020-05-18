const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    inject: false,
    hash: true,
    template: "./src/index.html",
    filename: "./index.html"
});
const cssPlugin = new MiniCssExtractPlugin({
    filename: "style.css"
})

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        },
        {
            test: /\.scss$/,
            use: [
              "style-loader",
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
            ]
        }
      ]
    },
    plugins: [htmlPlugin, cssPlugin]
};
//const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/js/index.js",
    category: "./src/js/api/api_search_category.js",
    book: "./src/js/api/api_book.js",
    component_card_book: "./src/js/component/book/card_book.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 5001,
    open: true,
    hot: true,
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext][query]",
    //clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpeg|png|gif|svg|jpg)$i/,
        type: "asset/resource",
      },

      /*{
        test: /\.(jpe?g|png|gif|svg|jpg)$/i,
        loader: "file-loader",
        options: {
          name: "/images/[name].[ext]",
        },
      },*/

      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "book",
      filename: "index.html",
      template: path.resolve(__dirname, "src/views/index.html"),
      chunks: ["category", "app"],
    }),
    new HtmlWebpackPlugin({
      title: "book",
      filename: "category.html",
      template: path.resolve(__dirname, "src/views/category.html"),
      chunks: ["app", "component_card_book"],
    }),
    new HtmlWebpackPlugin({
      title: "book",
      filename: "book.html",
      template: path.resolve(__dirname, "src/views/book.html"),
      chunks: ["book", "app"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),

    //new HtmlWebpackInlineSourcePlugin(),
  ],
};

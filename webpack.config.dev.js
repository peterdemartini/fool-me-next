const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "web",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".json"],
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        include: path.join(__dirname, "lib"),
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [path.join(__dirname, "lib"), path.join(__dirname, "node_modules")],
        loader: "file-loader",
        query: {
          name: "assets/[name].[hash:4].[ext]",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        query: {
          attrs: ["link:href"],
        },
      },
      {
        test: /\.js$/,
        loader: "transform?brfs",
        include: /node_modules\/pixi\.js/,
      },
    ],
  },
}

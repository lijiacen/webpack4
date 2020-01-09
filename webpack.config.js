const path = require("path");
const CopyRightWebpackPlugin = require("./plugins/copyright-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "production",
  entry: {
    main: "./src/index.js"
  },
  plugins: [
    new CopyRightWebpackPlugin({ name: "li" }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  resolveLoader: {
    modules: ["node_modules", "./loaders"]
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader", //url-loader和file-loader都可以打包图片，区别是url-loader会将图片以base64打包到js文件中，当图片过大时，打包的js文件也会过大。
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "img/",
            limit: 1024000 //所以最佳实践是：将小图片打包为base64，大于某个值的文件打包为图片。如果在配置中不加limit，所有图片都会打包为base64。
          }
        }
      },
      {
        test: /\.js/,
        use: [
          //path.resolve(__dirname, "./loaders/loader.js")
          {
            //loader: path.resolve(__dirname, "./loaders/loader.js")
            loader: "loader"
          },
          {
            //loader: path.resolve(__dirname, "./loaders/loaderAsync.js"),
            loader: "loaderAsync",
            options: {
              name: "lijiacen"
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  }
};

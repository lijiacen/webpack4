const path = require("path");
const CopyRightWebpackPlugin = require("./plugins/copyright-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js"
  },
  plugins: [new CopyRightWebpackPlugin({ name: "li" })],
  resolveLoader: {
    modules: ["node_module", "./loaders"]
  },
  module: {
    rules: [
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

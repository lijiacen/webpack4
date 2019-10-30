const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          //path.resolve(__dirname, "./loaders/loader.js")
          {
            loader: path.resolve(__dirname, "./loaders/loader.js"),
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

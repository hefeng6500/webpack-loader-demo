const path = require("path");

module.exports = {
  entry: "./test/lessLoader/index.less",
  output: {
    filename: "main.css",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: {
          loader: path.resolve(__dirname, "./src/lessLoader.js"),
        },
      },
    ],
  },
};

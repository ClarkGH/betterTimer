const path = require("path");

// TODO: set modes for prod/dev

// Path Constants
const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SCRIPTS: path.resolve(__dirname, "src"),
  SRC: path.resolve(__dirname, "src")
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.SCRIPTS, "main.js"),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js"
  },
  // Loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
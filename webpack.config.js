var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    site: [
      "./source/javascripts/site.js",
      "./source/stylesheets/site.scss"
    ],
  },
  resolve: {
    root: __dirname + "/source/javascripts",
  },
  output: {
    path: __dirname + "/.tmp/dist",
    filename: "javascripts/[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("sass-loader") }
    ]
  },
  sassLoader: {
    includePaths: ["source/stylesheets"]
  },
  plugins: [
    new ExtractTextPlugin("build/site.css")
  ]
};

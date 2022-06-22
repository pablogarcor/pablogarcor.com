const dev = "dev" === process.env.NODE_ENV,
  path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  indexConfig = {
    template: "./src/index.html",
    inject: "body",
    baseHref: "./",
  },
  webpackConfig = {
    mode: dev ? "development" : "production",
    devtool: !!dev && "eval-cheap-module-source-map",
    devServer: {
      historyApiFallback: !0,
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: !0,
      open: !0,
      port: 9e3,
    },
    entry: { app: "./src/main.ts" },
    module: {
      rules: [
        { test: /\.ts|\.tsx$/, loader: "ts-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.(woff|woff2)$/, loader: "file-loader" },
      ],
    },
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    output: { path: path.resolve("./dist"), filename: "[name].js" },
    stats: { warnings: !1 },
    target: "web",
    node: { __dirname: !1 },
    plugins: [
      new HtmlWebpackPlugin(indexConfig),
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/link.css", flatten: !0, to: "./assets/css/" },
        ],
      }),
    ],
  };
module.exports = webpackConfig;

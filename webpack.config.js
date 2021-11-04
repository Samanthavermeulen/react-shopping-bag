const currentTask = process.env.npm_lifecycle_event
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const WebpackManifestPlugin = require("webpack-manifest-plugin")

const config = {
  entry: "./src/components/App.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html")})],
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 8080,
  },
  // devServer: {
    
  //   port: 8080,
  //   contentBase: path.resolve(__dirname, "build"),
  //   hot: true
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }], "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

if (currentTask == "build") {
  config.mode = "production"
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({ filename: "style.css" }), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}

module.exports = config

// module.exports = {
//   entry: "./src/components/App.tsx",
//   target: "web",
//   mode: "development",
//   output: {
//     path: path.resolve(__dirname, "build"),
//     filename: "bundle.js",
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         loader: "awesome-typescript-loader",
//       },
//       {
//         enforce: "pre",
//         test: /\.js$/,
//         loader: "source-map-loader",
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "src", "index.html"),
//     }),
//   ],
// };

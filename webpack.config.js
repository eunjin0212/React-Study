module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //es6과 관련된 `loader`,`.js`와 함꼐 `.jsx`확장자도 같이 번들함
        exclude: /node_modules/, //`/node_modules`은 제외
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/, //`html loader`
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", //public/index.html 를 템플릿으로 지정
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
  output: {
    filename: "bundle.[hash].js",
  },
};

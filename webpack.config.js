const path = require('path');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
module.exports= {
  mode: 'development',
  devtool: 'source-map',
  context:path.resolve(__dirname, 'src'),
  entry: {
     main: './assets/styles/main.scss',
    snapshot: './assets/styles/snapshot.scss',
    joinus: './assets/styles/joinus.scss',
    review: './assets/styles/review.scss',
    salary:'./assets/styles/salary.scss',
    photo:'./assets/styles/photo.scss',
    benefit:'./assets/styles/benefit.scss',
    job:'./assets/styles/job.scss',
    qa:'./assets/styles/qa.scss',
    interview:'./assets/styles/interview.scss'
  },
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "./dist"),
  },
  module:{
    rules:[
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
    },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}

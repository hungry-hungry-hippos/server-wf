// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env'],
//           },
//         },
//       },
//       {
//         test: [/\.js$/],
//         exclude: /node_modules/,
//         use: ['babel-loader', 'babel-eslint', 'eslint-loader'],
//       },
//     ],
//   },
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/client/dist',
//   },
// };

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, use: {
                    loader: 'babel-loader', options: {
                        presets: [['@babel/preset-env', { targets: 'last 2 versions'}]],
          },
        },
      },
    ],
  },
};
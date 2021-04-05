const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [ 
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
      },
    target: 'web',
}
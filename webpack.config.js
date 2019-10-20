const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'} 
        ]
    },
    externals: {
        'fs': 'fs'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['app']
        })
    ],
    devServer: {
        contentBase: './',
        inline: true
    }
}
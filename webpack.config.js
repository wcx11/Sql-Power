const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');

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
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},            
            {
                test: /\.css$/,
                include: APP_DIR,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                    },
                }],
            }, 
            {
                test: /\.css$/,
                include: MONACO_DIR,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    externals: {
        'fs': 'fs'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['app']
        }),
        new MonacoWebpackPlugin({
            // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
            languages: ['sql','powerquery']
        })
    ],
    devServer: {
        contentBase: './',
        inline: true
    }
}
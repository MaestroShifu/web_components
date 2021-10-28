const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // development - production - none
    entry: {
        web_component: path.join(__dirname, 'src', 'index.ts'),
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.css|\.s(c|a)ss$/,
                use: [{
                  loader: 'lit-scss-loader',
                  options: {
                    minify: true, // defaults to false
                  },
                }, 'extract-loader', 'style-loader', 'css-loader', 'sass-loader'],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'] 
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
    ],
};
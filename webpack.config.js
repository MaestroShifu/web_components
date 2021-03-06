const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // development - production - none
    entry: {
        index: path.join(__dirname, 'src', 'index.ts'),
        // web_component: path.join(__dirname, 'src', 'components', 'web-component', 'web-component.ts'),
        // google_maps: path.join(__dirname, 'src', 'components', 'google-maps', 'google-maps.ts')
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer')
        }
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
                }, 'extract-loader', 'css-loader', 'sass-loader'],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
};
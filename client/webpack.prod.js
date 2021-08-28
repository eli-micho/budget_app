const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woof(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Elijah')
        })
    ],
}
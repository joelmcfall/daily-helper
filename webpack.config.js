//REMEMBER TO RUN NPXwEBPACK
const path = require('path');
const HmtlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //Mode the project is in
    mode: 'development',
    //Main Entry point
    entry: './src/index.tsx',

    // entry: {
    //     //these are names for the bundles and where to point to
    //     index: './src/index.js',
    //     print: './src/print.js'
    //     //anything here: 'what to bundle'
    // },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        headers: {
            "Access-Control-Allow-Origin": "*",
          }
    },

    optimization: {
        runtimeChunk: 'single',
    },

    plugins: [
        new HmtlWebpackPlugin({
            title: 'Development',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ],
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    //Match output made by npx webpack
    output: {
        //change this if you want to
        filename: '[name].[contenthash].js',
        //path to the filename above
        path: path.resolve(__dirname, 'dist'),
        //use this to remove old build files
        clean: true,
        //public path to ensure it serves to '/'
        publicPath: '/',
    },
};
const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


//Tells the server to use the webpack.config.js file 
app.use([
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }),
]);

//Serve the files here
app.listen(3000, function () {
    console.log('serving on 3000');
})
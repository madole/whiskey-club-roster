const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const app = express();
const env = process.env.NODE_ENV || 'development';
const winston = require('winston');

const router = require('./src/server/router');

if (env === 'development') {
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    colors: true,
    publicPath: config.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static('/static/', __dirname + '/dist'));
}

app.use(router);


app.listen(3000, 'localhost', (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info('Listening at http://localhost:3000');
});

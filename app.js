'use strict';
/**
 ** Import Module dependencies
 */
const
    express = require('express'),
    bParser = require('body-parser'),
    compression = require('compression'),
    cors = require('cors'),
    helmet = require('helmet'),
    Routes = require('./Routes');

/**
 * Create Express App
 */
const App = express();

/**
 * Config App
 */
require('clarify');
App.disable('x-powered-by');

/**
 * Config Middleware Stack
 */
App.use(cors());
App.use(bParser.json());
App.use(bParser.urlencoded({ extended: true }));
App.use(compression());
App.use(helmet());

App.use(function (err, req, res, next) {
  console.error(err.stack);
  return res.status(500).json('An error occured');
});
/**
 * Setup Test Route
 */
App.get('/test', function (req, res) {
    return res.status(200).
      send('<marquee><h1>Yaaaay... it works!!!</h1></marquee>');
  });

/**
 * Import Routes
 */
App.use('/', Routes);

/**
 * Export App
 */
module.exports = App;
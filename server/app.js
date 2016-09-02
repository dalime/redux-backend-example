// CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/YOUR_DB_NAME';

// PACKAGE REQUIRES
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

// DB CONNECT
const mongoose = require('mongoose');
mongoose.connect(MONGO_URI, err => {
  if(err) throw err;
  console.log(`MongoDB connected to ${MONGO_URI}`);
});

mongoose.Promise = Promise; //Second promise is JavaScript's native Promise

// APP DECLARATION
const app = express();

app.use((req, res, next) => {

  res.error = function(err) {
    res.status(400).send(err);
  }

  next();
})

// FOR HANDLING RESPONSE
// app.use((req, res, next) => {
//
//   res.handle = function(err, data) {
//     res.status(err ? 400 : 200).send(err || data);
//   }
//
//   next();
// })

// WEBPACK CONFIG
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  let indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

// SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});

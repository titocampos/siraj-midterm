'use strict'
global.__basedir = __dirname;

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/router');
const cors = require('cors');
const path = require('path');
const {verifyToken} = require('./services/firebase-service');
const { log } = require('./util/loggerTool');

const app = express()
app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use('/v1/', verifyToken);
app.use('/', routes);

// middleware to deal with 404 error
app.use((req, res, next) => {
  let err = {
    message: 'route does not exist',
    status: 404
  }
  next(err)  // send error to next middleware
})

// receives error from last middleware
app.use((err, req, res, next) => {
  // if error 404, sends back message 'route does not exist'
  // otherwise it sends Murphy's message
  log('api_server', 'error', `Error status ${err.status}, message: ${err.message}, url: ${req.url}.`)
  // console.log(err.status)
  res.status(err.status || 500).send(err.message || `Don't force it get a larger hammer.`)
})

module.exports = app;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { serverPort } = require('./config/general')
const port = process.env.PORT || serverPort

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/templateLogReg'));

var routes = require('./routes/router');
app.use('/', verifyToken);
app.use('/', routes);

app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, function () {
  console.log(`Express app listening on port ${port}`)
});




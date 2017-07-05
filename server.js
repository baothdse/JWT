var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var User = require('./api/models/userModel');
var Message = require('./api/models/messageModel');
var bodyParser = require('body-parser');
var jsonwebtoken = require('jsonwebtoken');
var morgan = require('morgan');

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/chat-app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

var routes = require('./api/routes/todoRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('server started on: ' + port);

module.exports = app;

"use strict";

var _restify = _interopRequireDefault(require("restify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = _restify.default.createServer();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);
server.post('/hello/:name', respond);
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
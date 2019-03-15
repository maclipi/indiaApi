import restify from "restify";
import Connect2Mongo from "./connection/conn";
Connect2Mongo("mongodb://localhost:27017/test"); // creating Connection
function respond(req, res, next) {
  res.send("hello " + req.params.name);
  next();
}

var server = restify.createServer();
server.get("/hello/:name", respond);
server.head("/hello/:name", respond);
server.post("/hello/:name", respond);

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url);
});

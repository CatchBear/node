var server = require("./server");
var route = require("./route");
var requestHandles = require("./requestHandles");

var Handle = {};
Handle["/"] = requestHandles.start;
Handle["/start"] = requestHandles.start;
Handle["/upload"] = requestHandles.upload;

server.start(route, Handle);
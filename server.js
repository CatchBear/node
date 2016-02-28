var http = require("http");
var url = require("url");

function start(route, Handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathName = url.parse(request.url).pathname;
        console.log(pathName + "received");
        request.setEncoding("utf8");

        request.addListener("data", function (postDatachunk) {
            postData += postDatachunk;
            console.log("收到的消息：" + postDatachunk);
        })
        request.addListener("end", function () {
            route.route(Handle, pathName, response, postData);
        })

        /* response.writeHead(200, {
     "Content-type": "text-plain"
 });
 response.write("hello world");
 response.end();*/
    }
    http.createServer(onRequest).listen(8888);
};
console.log("server is runing");

exports.start = start;
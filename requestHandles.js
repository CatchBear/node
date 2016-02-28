var query = require("querystring");

function start(response, postData) {
    console.log("start has called");
    var body = '<html>' + '<head>' + '<meta charset=UTF-8>' + '</head>' + '<body>' + '<form action="/upload" method="post">' + '<textarea name="text" rows="10" cols="30"></textarea>' + '<input type="submit" value="click me"/>' + '</form>' + '</body>' + '</html>';

    response.writeHead(200, {
        "Content-type": "text/html"
    });
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log("upload has called");
    response.writeHead(200, {
        "Content-type": "text/plain"
    });
    response.write("你刚刚发送了   " + query.parse(postData).text);
    response.end();
}
exports.start = start;
exports.upload = upload;
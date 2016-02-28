function route(Handle, pathname, response, postData) {
    console.log("request for:" + pathname);

    if (typeof Handle[pathname] === 'function') {
        Handle[pathname](response, postData);
    } else {
        console.log("request not found");
    }
}

exports.route = route;
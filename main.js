// hello world in node.js
var http = require("http");

http.createServer(function (req, res) {

    // Send header, status, and mime type:
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Send the response:
    res.end('<h3>Hello World!</h3>\n');

}).listen(4000); //listen on port 4000

// log the server is running:
console.log('Server running: http://127.0.0.1:4000/');

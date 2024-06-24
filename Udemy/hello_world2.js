// step 1. import required model.
var http = require('http') 

/* step 2. create server.
- We use the created http instance and call http.createServer() method to create a server instance. 
- then we bind it at port 8081 using the listen method associated with the server instance.
- Pass it a function with parameters:
    1. request.
    2. response. 
- Write the sample implementation to always return "Hello World".
*/
http.createServer(function(request,response){
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World 2\n');
}).listen(8081);

// Console will print the log
console.log('Server running at http://127.0.0.1:8081/')

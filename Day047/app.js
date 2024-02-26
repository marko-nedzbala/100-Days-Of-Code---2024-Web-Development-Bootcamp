
const http = require('http');
function handleRequest(request, response) {
    // holds localhost:3000/currenttime
    if (request.url === '/currenttime') {
        response.statusCode = 200;
        response.end('<h1>' + new Date().toISOString() +'</h1>');
    } else if (request.url === '/') {
        response.statusCode = 200;
        response.end('<h1>It worked</h1>');
    }
}
const server = http.createServer(handleRequest);
server.listen(3000);





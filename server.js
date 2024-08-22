const http = require('http');
const fs = require('fs');
const path = require('path');

const handleRequest = (request, response) => {
    switch (request.url) {
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Hello World!');
            break;
        case '/users':
            fs.readFile(path.join(__dirname, 'users.json'), (err, data) => {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'text/plain' });
                    response.end('Internal Server Error');
                    return;
                }
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(data);
            });
            break;
        case '/docs':
            fs.readFile(path.join(__dirname, 'docs.json'), (err, data) => {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'text/plain' });
                    response.end('Internal Server Error');
                    return;
                }
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(data);
            });
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');
            break;
    }
};

const server = http.createServer(handleRequest);

const port = 3300;

server.listen(port, () => {
    console.log(`Server running at <http://localhost:${port}`);
})
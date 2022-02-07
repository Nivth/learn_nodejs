const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    res.end('welcome to the server');
})

server.listen(5000)
// const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.write('Hello');
        res.end();
    }
    if (req.url === '/api/courses'){
        res.write(1+1)
        res.end();
    }
})
// const server = http.createServer();
//http server inherits from net.Server class, where the net.Server is a EventEmitter 
// so that all properties of EventEmitter had by the http server to  

// server.on('connection', (Socket) =>{
//     console.log('New Connection....')
// })


server.listen(3000);

console.log('Listening on port 3000...');
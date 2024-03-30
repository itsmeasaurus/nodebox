const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to the server!');
    }

    else if(req.url === '/about'){
        res.end('About Page!BLah blah blah');
    }

    else {res.end('404 not found');}
}).listen('3000')
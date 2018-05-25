const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let result = {
            name: 'Rapha',
            age: 29,
            url: req.url
        }

        res.write(JSON.stringify(result));
        res.end();
    })
    .listen(3000);

console.log('Listen on port 3000');
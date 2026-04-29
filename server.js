const http = require('http'), fs = require('fs');

http.createServer((req, res) => {
    let f = req.url === "/" ? "index.html" : req.url.slice(1);
    fs.readFile(f, (e, d) => res.end(e ? "Error" : d));
}).listen(8000);


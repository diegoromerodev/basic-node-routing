const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let query = req.url.toString().match(/\/(.*)/)[1];
    if (!query) query = "index";
    console.log(query)
    fs.readFile(`./${query}.html`, "utf8", (err, data) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        if (err) {
            const notFound = fs.readFileSync("./404.html", "utf8");
            res.write(notFound);
            res.end();
            return;
        }
        res.write(data)
        res.end();
    })
}).listen(8080)
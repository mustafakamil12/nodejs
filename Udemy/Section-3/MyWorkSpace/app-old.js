const http = require('http');
const fs = require('fs')


const server = http.createServer((req,res) => {
    //console.log(req.url, req.method, req.headers)
    //process.exit()
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk) // to see what in side chunk
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt', message); //This will Block running till the file done.
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;  // mean redirection
                res.setHeader('Location', '/');  // standard
                return res.end();
            });
        });
    }
    res.setHeader('Content-Tyepe', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js Server</h1></body>')
    res.write('</html>')
    res.end() // This will tell nodejs to send back the response.
});

server.listen(3000)
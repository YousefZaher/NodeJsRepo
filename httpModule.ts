

const http= require('http');
const server = http.createServer((req : any,    res: any) => {
    if(req.url === '/')
        res.end("<h1>Welcome To Home Page</h1>")
    if(req.url === '/about')
        res.end("<h1>Welcome To About Page</h1>")
})

server.listen(3001)


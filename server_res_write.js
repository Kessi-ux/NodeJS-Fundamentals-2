const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);

// set header content type
res.setHeader('Content-Type', 'text/html')
res.write('<p>hello, ninjas</p>')
res.end();

})

// //send an html file
// fs.readFile('./views/index.html', (err, data) => {
//     if (err){
//         console.log(err);
//     }else {
//         res.write(data);
//         res.end();
//     }
// })

server.listen(5000, 'localhost', ()=>{
    console.log('listening for requests on port 5000')
})
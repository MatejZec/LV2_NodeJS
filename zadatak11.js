var http = require('http');
var nPort = 8000;
const osobe = require("./osobe.json");
const jsonContent =JSON.stringify(osobe);
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    

response.write(jsonContent);
response.end();
}).listen(nPort);
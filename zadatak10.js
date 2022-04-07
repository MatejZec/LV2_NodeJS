var http = require('http');
var nPort = 8000;
var rando = require("./slucajanBroj");
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

//import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];
for (i = 1; i<=10; i++)
{
    aBrojevi.push(rando.dajSlucajanBroj(10, 100));
}
var strArr = aBrojevi.map(function(e){return e.toString()});
//console.log(strArr);
strArr.forEach(function(s, indeks){
    if (indeks === strArr.length - 1)
    { 
        response.write(s); 
    }
    else
    {
        response.write(s + " ");
    }
    
});

//response.write("matej");
response.end();
}).listen(nPort);
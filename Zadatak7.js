
var rando = require("./slucajanBroj");


var aBrojevi = [];
for (i = 1; i<=200; i++)
{
    aBrojevi.push(rando.dajSlucajanBroj(150, 1500));
}
const min = Math.min(...aBrojevi)
const max = Math.max(...aBrojevi)
console.log("Najmanji jest: " + min);
console.log("Najveci jest: " + max);


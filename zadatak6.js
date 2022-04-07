
var rando = require("./slucajanBroj");



var aBrojevi = [];
for (i = 1; i<=100; i++)
{
    aBrojevi.push(rando.dajSlucajanBroj(50, 5000));
}


const parni = aBrojevi.filter(number => {
    return number % 2 === 0;
});
const neparni = aBrojevi.filter(number => {
    return number % 2 === 1;
});
console.log("Parnih ima " + parni.length);
console.log("Neparnih ima " + neparni.length);

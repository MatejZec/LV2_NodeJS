var rando = require("./slucajanBroj");

var aBrojevi = [];
for (i = 1; i<=3; i++)
{
    aBrojevi.push(rando.dajSlucajanBroj(10, 100));
}

console.log(...aBrojevi);

aZadnjeZnamenke = [];

aBrojevi.forEach(function(n)
{
    //console.log(n + " ");
    aZadnjeZnamenke.push(lastDigit(n));
});

const duplikati = (aZadnjeZnamenke) => new Set(aZadnjeZnamenke).size < aZadnjeZnamenke.length ;
console.log(duplikati(aZadnjeZnamenke));




function lastDigit(n)
{
    return Math.floor(n % 10); 
}


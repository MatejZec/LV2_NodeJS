
var rando = require("./slucajanBroj");


var aBrojevi = [];
for (i = 1; i<=50; i++)
{
    aBrojevi.push(rando.dajSlucajanBroj(1, 20));
}
function onlyUnique(value, index, self)
{
    return self.indexOf(value) === index;
}
  
  // usage example:
var unique = aBrojevi.filter(onlyUnique);
console.log("Jedinstveni su: " + unique);


var rando = require("./slucajanBroj");

var aBrojevi = [];
for (i = 1; i<=30; i++)
{
    aBrojevi.push(rando.dajSlucajanBroj(10, 200));
}

function Sortiraj(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  Sortiraj(aBrojevi);
  console.log(aBrojevi);

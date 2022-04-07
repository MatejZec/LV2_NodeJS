/*var n = prompt("Unesite broj veci od 99: ");
if (isNaN(n) || n < 100) 
{
    var n = prompt("Morate unijeti broj veci od 99: ");
}
else
{
    console.log(n);
    console.log(firstDigit(n) + lastDigit(n));
}*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Unesite broj veci od 99: ", function (n) 
{
    //console.log(`Oh, so your name is ${answer}`);
    if (isNaN(n) || n < 100) 
    {
        //var n = prompt("Morate unijeti broj veci od 99: ");
        console.log("Niste unijeli ispravno!");
    }
    else
    {
        console.log(n);
        console.log("Zbroj prve i zadnje znamenke: " + (firstDigit(n) + lastDigit(n)));
    }
    //console.log("Closing the interface");
    rl.close();
});


function firstDigit(n)
{
    while (n >= 10)
        n /= 10;
       
    return Math.floor(n);
}
   
function lastDigit(n)
{
    return Math.floor(n % 10);
}

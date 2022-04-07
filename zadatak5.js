var aPolje = [];
/*for (i = 1; i<=50; i++)
{
    if (i % 7 == 0)
    {
        aPolje.push(i);
    }
}*/
var brojac = 1;
var i = 1;
while(brojac<=50)
{
    if (i % 7 == 0)
    {
        brojac++;
        aPolje.push(i);
        
    }
    i++;
    
}
//console.log(aPolje.length);
var aParniBrojevi = [];
aPolje.forEach(function (nBroj) {
    if (nBroj % 2 == 0)
    {
        aParniBrojevi.push(nBroj);
    }
});
aParniBrojevi.forEach(function(nBroj){
    console.log(nBroj);
})

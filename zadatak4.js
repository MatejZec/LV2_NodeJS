var suma = 0;
/*for (i = 1; i<=100; i++)
{
    if (i % 2 == 1)
    {
        suma += i;
    }
}*/
var counter = 1;
var i = 1;
while(counter<=100)
{
    if (i % 2 != 0)
    {
        counter++;
        suma +=i;
        
    }
    i++;
    
}
console.log(suma);
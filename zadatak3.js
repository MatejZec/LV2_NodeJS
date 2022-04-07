for (i=1; i<=100; i++)
{
    if (i % 5 == 0)
    {
        if (i % 7 == 0)
        {
            console.log("Broj " + i + " je dijeljiv s 5 i sa 7");
        }
        else
        {
            console.log("Broj " + i + " je dijeljiv s 5");
        }
    }

    if (i % 7 == 0)
    {
        if (i % 5 == 0)
        {
            //console.log("Broj " + i + " je dijeljiv s 5 i sa 7");
        }
        else
        {
            console.log("Broj " + i + " je dijeljiv s 7");
        }
    }
    /*if (i % 5 == 0 && i % 7 == 0)
    {
        
    }*/
}
var aPolje1 = [1, 4, 7, 8, 9, 12, 16, 18, 22, 24, 25];
var aPolje2 = [2, 3, 4, 7, 8, 11, 13, 15, 17, 18, 22, 23];

const intersection = aPolje1.filter(element => aPolje2.includes(element));
intersection.forEach(function(n){
    console.log(n);
});
// adds every numbers above 0 and below 1000 that are divisible by 3 or 5 

var sum = 0;

for (var i = 1; i < 1000; i++){
 if (i%3==0 || i%5==0) sum += i; 
}
return sum;

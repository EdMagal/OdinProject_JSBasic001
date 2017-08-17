//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var fib = [1, 1];

while (fib[fib.length-1] < 4000000){
  fib.push(fib[fib.length-2]+fib[fib.length-1]);
}

return fib.filter(x=>x%2==0)   // removes all odd elements
          .reduce((a,b)=>a+b); // add all the remaining elements

// sum of any number

function sum(num){
    let sum = 0;
    
    while(num > 0){
        sum = sum + (num % 10);
        num = Math.floor( num/ 10);
        
    }
   return sum;
}
let num = 1234
console.log("The sum of "+ num + " is " + sum(num));

//count even number

function even(num){
   
    let total = 0;

    for(let i = 0 ; i < num.length ; i++){
        if(num[i] % 2 == 0){
           total++
        }
    }
   return total;
}

console.log(even([1,2,4,4,5,666,7774]));

//count positive number

function positive(array){
    let pos = 0;
    for(let i=1 ; i < array.length; i++){
        if(array[i] > 0){
            pos++
        }
    }
    return pos ; 
}

console.log(positive([-5,2,-1,8,0,7]))

//count even numbers above 0 

function positiv(array){
    let pos = 0;
    for(let i=1 ; i <= array.length; i++){
        if(array[i] > 0 && array[i] % 2 === 0){
            pos++;
        }
    }
    return pos;
}

console.log(positiv([-5,2,-1,8,0,7]))

//sum of all enements

function summ(ary){
    let total = 0 ;
    for(let i = 0; i < ary.length ; i++){
        total = total + ary[i];
    }
    return total;
}
console.log(summ([1,2,3,4,5,6]))

//sum of even numbers

function evensum(arrray){
    let ans = 0;
    for(let i = 0 ; i <= arrray.length; i++){

        if(arrray[i] % 2 === 0){
            ans = ans + arrray[i];
        }
    }
    return ans;
}

console.log(evensum([1,2,3,4,5,6,7,9]));

//sum of odd numbers

function oddsum(arrray){
    let ans = 0 ;
    for(let i = 0 ; i < arrray.length; i++){

        if(arrray[i] % 2 !== 0 ){
            ans = ans + arrray[i];
        }
    }
    return ans;
}

console.log(oddsum([1,2,3,4,5,6]))

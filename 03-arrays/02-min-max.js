//largest number in an array

function largest(num){
    let max = num[0];

    for(let i = 1 ; i <= num.length ; i++){
        if(num[i] > max){
            max = num[i];
        }

        
    }

    return max;
}

console.log(largest([1,2,3,4,5]))


//find minimum number

function minimum(arrray){
    let mini = arrray[0] ;

    for(let i = 0 ; i < arrray.length ; i++){

        if(mini > arrray[i]){
            mini = arrray[i];
        }
    }
    return mini;
}

console.log(minimum([8,2,3,4,5,6,7]));

//find maximum even number

function maximum(arrray){
    let maxi = arrray[0];

    for(let i=0 ; i < arrray.length ; i++){
        if(maxi < arrray[i] && arrray[i] % 2 === 0){
            maxi = arrray[i];
        }
    }
    return maxi;
}

console.log(maximum([1,2,3,99,5,6,7,4]));

//smallest odd number

function smallest(arrray){
    let small = arrray[0];

    for(i = 0; i < arrray.length; i++){
        if(small > arrray[i] && arrray[i] % 2 !== 0){
            small = arrray[i];
        }
    }
    return small;
}
console.log(smallest([9,7,5,2,3]));

//index of largest number

function indx(ary){
    let largest = ary[0];
    let index = 0;

    if(ary.length === 0){
        console.log(`their isnt any number in the array`)
        return;
    }

    for(let i = 1 ; i < ary.length ; i++){
        if(ary[i] > largest){
            largest = ary[i];
            index = i ;
        }
    }
    console.log(`largest number is: ` + largest + ` and the index is: `+ index);
}

indx([1,2,4,56,43,65,67,5]) 

// palindrom ==> racecar , madam same on both sides straight or reversed.

function palindrome(word){
    let reversing = "";

    for(let i = word.length - 1 ; i >= 0 ; i--){
        reversing = reversing + word[i];
    }
    return word === reversing;
}


console.log(palindrome("madam"));


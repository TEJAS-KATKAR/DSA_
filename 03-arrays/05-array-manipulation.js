// reverse an array

function reverse(array){
    let rev= [];

    for(let i = array.length-1; i >= 0 ; i--){
        rev.push(array[i]);
    }
    console.log(rev);
}

reverse([1,2,3,4,5]);

// remove dublicated from array

function dublicates(array){
    let dub = []
    let found = false;
    for(i = 0; i < array.length; i++){
        found = false;
        for(j = 0; j < i ; j++){
            if(array[i] === array[j]){
               found = true;
            }
        
        }
        if(!found){
            dub.push(array[i]);
        }
    }
    return dub;
}

console.log(dublicates([1,2,2,3,4,3,5,1,5,5,5,7]))

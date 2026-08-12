//check if number exist in array

function check(arrray , target){
    
    let found = false;
    
    for(let i = 0; i < arrray.length ; i++){
        if(arrray[i] === target){
            found = true;
            console.log(`The targeted number is at Index: ` + i)
        }
        
    }
    if(!found){
        console.log(`Their is no `+ target +` in the given Array` )
    }
}
check([2,7,5,7] , 7);

//count the occurences

function checking(arrray , target){
    let occurence = false;
    let occ = 0

    for(let i = 0 ; i < arrray.length; i++){
        if(arrray[i] === target){
            occurence = true;
            occ++;
            
        }
    }
    if(occurence){
        console.log(`The targeted value is occured: ` + occ + ` times`);
    }
    else{
        console.log(`The targeted value is not occured`)
    }
}
checking([2,3,4,5,6,6,6] , 6)

//find first even number

function First(ary){
    let even = 0;
    let got = false;
    for(let i = 0 ; i < ary.length ; i++){
        if(ary[i] % 2 === 0){
            got = true;
            even = ary[i];
            return console.log(even) ;
        }
        
    }
    if(!got){
        console.log(`their is not an even number`)
    }

}

First([1,45,4]) 


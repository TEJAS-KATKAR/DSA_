/*
   console.log(str.toUpperCase());

1. toUpperCase() --> make string uppercase
2. toLowerCase() --> make string lowercase
3. trim()        --> removes empty spaces from string
4. include()     --> check if the string contsains another string
5. startsWith()  --> check how the string begins.
6. endsWith()    --> check how the string ends.
7. indexOf()     --> finds the first occurrence of a charecter or word 
8. slice()       --> Extracts part of a string.                         ex: slice(start , end)
9. replace()     --> replaces the first matching occurence. 
10. split()      --> converts a string into an array.    ex. let str = "apple,banana,mango";    console.log(str.split(","));

*/

//count vowels from the word

function vowels(word){
    word = word.toLowerCase();
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] === "a" ||
           word[i] === "e" ||
           word[i] === "i" ||
           word[i] === "o" ||
           word[i] === "u"
        ){
            count++;
        }
    }
    return count;
}

console.log(vowels("jAvAscript"))

// count vowels from the word (smaller version with include)
function vowels(word){
    word = word.toLowerCase();
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if( "aeiou".includes(word[i])){
            count++;
        }
    }
    return count;
}

console.log(vowels("jAvAscript"))

//count uppercase and lowercase charecters

function Case(word){
    let count = 0;
    
    for(i = 0; i < word.length; i++){
        if( word[i] >= "A" && word[i] <= "Z" ||
            word[i] >= "a" && word[i] <= "z"
         ){
            count++
        }
    }
    return count
}
console.log(Case("jAvAScRiPt 123"))


//reverse a string

function reverse(word){
    reversed = "";

    for(let i = word.length -1 ; i >= 0 ; i--){
        reversed = reversed + word[i];

    }
    return reversed;
}

console.log(reverse("javascript"));

//remove all spaces

function rem(word){
    let remspace = "";
    for(i = 0 ; i < word.length ; i++){
        if(word[i] === " "){
        
        }else{
            remspace += word[i];
        }
    }
    return remspace;
}

console.log(rem("I Love J ava"));


// make word uppercase
function up(word){
    let upper = "";
    for(i = 0 ; i < word.length ; i++){
        upper += word[i].toUpperCase();
    }
    return upper;
}

console.log(up("I Love Java"));




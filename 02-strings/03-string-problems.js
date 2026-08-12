
//count words

function numb(word){
    let count = 0;
    for(let i = 0 ; i < word.length ; i++){
        if(word[i] !== " " && (word[i - 1] === " " || i === 0) ){
          count++
        }
    }
    return count;
}

console.log(numb("I love java"));

//longest word

function longest(line){
    let currentword ="";
    let longestword ="";

    for(let i = 0 ; i < line.length; i++){
        if(line[i] !== " "){
            currentword += line[i];
        }
        if(line[i+1] === " " || line[i+1] === undefined){
            if(currentword.length > longestword.length){
                longestword = currentword;
            }
            currentword ="";    
        }
    }
    if(longestword === ""){    
        console.log("please add an input!")
    }else{
        return console.log(longestword);
    }
}

longest("I love Programming");

//string compression

function Comp(strng){
    let output = "";
    
    let cache = 1;

    for(let i = 0 ; i < strng.length; i++){

        if(strng[i] === strng[i + 1] ){
            cache++
        }else{
            output += strng[i]
            output += cache;
            cache = 1;
        }
    }
    return output
}
console.log(Comp("aaaaaaabbcccccccc"));

//charecter frequency

function ch(word) {
    let alreadySeen = false;
    let count = 0;

    for (let i = 0; i < word.length; i++) {

        // Check if this character was seen before
        for (let j = 0; j < i; j++) {
            if (word[i] === word[j]) {
                alreadySeen = true;
                break;
            }
        }

        // If already counted, skip it
        if (alreadySeen) {
            continue;
        }

        // Count frequency
        
        for (let j = 0; j < word.length; j++) {
            if (word[i] === word[j]) {
                count++;
            }
        }
        console.log(word[i] + " " + count);
    }
}

ch("banana");
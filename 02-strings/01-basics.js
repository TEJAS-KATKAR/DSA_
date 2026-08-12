// print every charecter
function Say(word){
    let letter = "";

    for(i = 0 ; i < word.length ; i++){
        letter = word[i];
        console.log(letter);
    }
}

Say("Hello")

//print every charecter with index

function Say(word){
    let letter = "";
    

    for(i = 0 ; i < word.length ; i++){
        letter = word[i];
        console.log(` ${i} ${letter}` );
    }
}

Say("Hello")

//print only the charecters at even indexes

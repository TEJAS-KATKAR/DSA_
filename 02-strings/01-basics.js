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

function Says(word){
    let letter = "";
    

    for(i = 0 ; i < word.length ; i++){
        letter = word[i];
        console.log(` ${i} ${letter}` );
    }
}

Says("Hello")

//print only the charecters at even indexes

function evenindx(msg){
    let ans = "";

    for(let i = 0; i < msg.length ; i++){
        ans = msg[i]

        if( i % 2 === 0){
            console.log(`${i} ${ans}`)
        }
    }
}

evenindx("GoodMorning");
















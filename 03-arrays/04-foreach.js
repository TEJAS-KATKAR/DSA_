//print each number
const nums= [5,10,15,20];

let arrray = nums.forEach((n) => {
console.log(n)
})

//print 10,20,30,40

const aray = [10,20,30,40];

let a = aray.forEach((num)=> {
 return console.log(num)
});

console.log("      ")
//print each number multiplied by 5 

const numbs =[2,4,6,8];

let numbers = numbs.forEach((num) => {
    return console.log(num * 5)
});

console.log("      ");


//print the index with the value

const array = ["Red" , "Blue" , "Green"];

function ary(){
    array.forEach((color , indx )=> {
        console.log(`${indx} . ${color}`)
        
    })
    
}
ary() ;

//calculate total price 

const cart = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1200 },
    { name: "Monitor", price: 8000 }
];

let total = 0 ;

cart.forEach((shop)=> {
    total += shop.price;
})

cart.forEach((shop)=>{
    console.log(`Your ${shop.name} have total of ${shop.price}`)
    
})
console.log(`Your total is : ${total}`)
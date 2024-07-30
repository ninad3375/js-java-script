// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 8830206903958n


// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ninad",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber)


// ******************** Memory ***************************

// Stack (Primitive), Heap (NOn-Primitive)

let myName = "ninad"

let anothername = myName
anothername= "himanshu"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "ninad@google.com"

console.log(userOne.email);
console.log(userTwo.email);
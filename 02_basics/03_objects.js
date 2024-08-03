// ************** Singleton ***************

// *********** Object Literals ****************
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Ninad",
    "full name": "Ninad Band",
    [mySym]: "mykey1",
    age: 22,
    location: "Amravati",
    email: "ninad@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "niand@chatgpt.com"
// Object.freeze(JsUser)
JsUser. email = "ninadmicrosoft.com"
// console.log(JsUser);

// ********Functions***********

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






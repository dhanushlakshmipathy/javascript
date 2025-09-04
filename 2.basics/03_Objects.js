//singleton
// Object.create 


//object literals 
const JsUser={
    name:"Smthg",
    "full name":"Smthg K", 
    mySym:Symbol("key1"), 
    age:"10",
    email:"smthg@gmail.com",
    isLoggedin:false,
    lastLoggedin:["Monday"]

}

const mySym=Symbol("key1"); 

console.log(JsUser.name); 
console.log(JsUser["age"]); 
console.log(JsUser["full name"]); 

JsUser.greeting=function(){
    console.log("Hello JsUser"); 
}

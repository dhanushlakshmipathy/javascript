// console.log(4>1);
// console.log(4<1);
// console.log(4>=1);
// console.log(4<=1);
// console.log(4==1);
// console.log(4!=1);


console.log("2">1); 

console.log(null==0);
console.log(null>=0);
console.log(null>0);
console.log(null<=0);
console.log(null<0); 

//dont do these type of comparisions 
//===
console.log(null===0);
console.log("2"===2);
console.log("2"==2);
//primitive 
//based on how they r stored in the memory and accessed. 
const score=100
const scoreValue=100.3
const isloggedIn=false;
const outsideTemp=null;
//7 types: String , Number, Boolean, null, undefined, Symbol, BigInt 
//non-primitive 
//array, object, function 

const heros=["shaktiman","nagraj","doga"];
let myObj={
    name:"Dhanush",
    age:24
} 
// *************************************************************************

//memory storage type///

//Stack(Primitive), Heap(Non-Primitive)
//whatever primitive type we create it will be stored in stack memory 
let myYoutubename="Dhanush"; //stored in stack 

let anotherName=myYoutubename; //copy of myYoutubename is created and stored in anotherName 
anotherName="Ravi"; //anotherName is updated but myYoutubename is not updated 

console.log(anotherName); //Dhanush 
console.log(myYoutubename); //Ravi 


let user={
    email: "user@gmal.com",
    upi: "user@okicici" 
}

let userTwo=user; //copy of user is created and stored in userTwo 

userTwo.email="dhanush@gmail.com"; 
console.log(userTwo.email); //
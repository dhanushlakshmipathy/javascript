//if 
// const isUserloggedIn=true;

if(2!=="2"){
    console.log("Executed");
    //do something 
}

// const temperature=29;
// if(temperature>30){
//     console.log("It's a hot day");
// }else{
//     console.log("It's a cool day"); 
// }
//=== will check even if the type is same or not 
//!== will check even if the type is same or not 

// <,>,=,<=,>=,!=,==,===,!== 

// const score=200;

// if(score>100){
//     let power="fly"; //if you use var, it will be function scoped. it can be used outside the function, so better use let or const.
//     console.log(`User power is: ${power}`); 

// }

// // console.log(`User power is: ${power}`); //error power is not defined 

// const balance=1000;

// // if(balance>500) console.log("Balance is more than 500")

// if(balance<500){
//     console.log("Balance is less than 500")
// }else if(balance>500 && balance<1000){
//     console.log("Balance is more than 500 but less than 1000")
// }else if(balance===1000){
//     console.log("Balance is 1000");
// }
// else{
//     console.log("Balance is more than 1000");
// }

const isUserloggedIn=true;
const debitCard=true;

if(isUserloggedIn && debitCard){
    console.log("Allow to buy course.")
}else{
    console.log("Please login to buy course.")
}

//Nullish Coalescing Operator (??) : null or undefined 

let val1;
// val1=5 ?? 10; //if val1 is null or undefined, it will take 10
// val1=null ?? 10; //if val1 is null or undefined, it will take 10 
val1= undefined ?? 10; //if val1 is null or undefined, it will take 10 
console.log(val1);


//Ternary operator 
//condition ? true : false 

const iceTeaPrice=20;
iceTeaPrice >=80 ? console.log("I will buy IceTea") : console.log("I will not buy IceTea");
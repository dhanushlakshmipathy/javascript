function saymyName(){
    console.log("H")
    console.log("I")
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

saymyName();

function addTwoNum(num1,num2){
    let result=num1+num2;
    return result;
}

addTwoNum(4,5); 
addTwoNum(100,"a");

const result=addTwoNum(4,5); 
console.log(result);

function loginUserMessage(username){
    return `hello ${username}, welcome back!`; 
}

console.log(loginUserMessage("Lakshman"));

function calculateCartPrice(val1,val2, ...num1){ //rest operato
    return num1;
}

// console.log(calculateCartPrice(1000,2000,3000,4000));

function handleObject(anyobject){
    console.log(`user name is ${anyobject.name} and email is ${anyobject.email}`);
}
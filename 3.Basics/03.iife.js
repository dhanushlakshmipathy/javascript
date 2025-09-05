//Immediately invoked function express(IIFE)

(function chai(){
    //named IIFE 
    console.log("DB CONNECTED");
})();
//global scope pollution is removed using IIFE, when we use paranthesis for the functions it can be easily run.

( (name)=>{
    console.log(`DN CONNECTED TWO ${name}`);
})('dhanush');
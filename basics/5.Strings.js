const name="Dhanush"; 
const repoCount=100; 

// console.log(name + "has repo count of "+repoCount); //Dhanush100     

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Hello ${name} 


const gameName= new String('PUBG'); //String object 

console.log(gameName[0]);
console.log(gameName.__proto__); //all the methods of string 

console.log(gameName.length); 
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('G'));

const newString=gameName.substring(0,3);
console.log(newString);

const anotherString=gameName.slice(0,3); 
console.log(anotherString); 

console.log(gameName.replace('PUBG','COD')); 

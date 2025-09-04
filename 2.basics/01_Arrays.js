//array 

const myArr=[1,2,3,4,5]; //array literal syntax


console.log(myArr[4]);
//zero based indexing 
//array copy does shallow copy 
//shallow copy means if we copy an array to another array and if we change the copied array the original array will also be changed
//deep copy means if we copy an array to another array and if we change the copied array the original array will not be changed

const myHeroes=['shaktiman','naagraj','doga']; 

const myArr2=myArr; //shallow copy 

//Array Methods

// myArr.push(6); //adds an element to the end of the array  
// console.log(myArr);

// myArr.pop(); //removes the last element of the array 

// myArr.unshift(0); //adds an element to the beginning of the array 

console.log(myArr.includes(9)); //returns true if the array contains the element 
console.log(myArr.indexOf(3)); //returns the index of the element in the array

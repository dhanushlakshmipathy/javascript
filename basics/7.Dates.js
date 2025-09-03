//Dates

let myDate=new Date(); //Current Date 
// console.log(myDate.toString()); 
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); 


// let myCreatedDate=new Date(2023, 0,23);
// let myCreatedDate=new Date(2023,0,23,4,5);
let myCreatedDate=new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp =Date.now();
// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime()); //timestamp 

// console.log(Math.floor(Date.now()/1000));

let newDate2=new Date();
// console.log(newDate2.getDay());
// console.log(newDate2.getDate());
// console.log(newDate2.getFullYear());
// console.log(newDate2.getHours());
// console.log(newDate2.getMinutes());
// console.log(newDate2.getSeconds()); 
// console.log(newDate2.getMonth()+1); //0-11


newDate2.toLocaleString('default', {
    month:'long',
    calendar:'gregory' 
}); //January 
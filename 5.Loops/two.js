// while(condition){
//     //do something 
// }

while(2==2){
    console.log("Hail hydra");
    break;
}

let index=0;
while(index<4){
    console.log(`${index}`);
    index++;
}

let myarray=["Batman","Superman","Flash"];

let arr=0;
while(arr<myarray.length){
    console.log(`Value is ${myarray[arr]}`);
    arr++;
}

let score=1;

do{
    console.log(`Score is${score}`);
    score++;    
}while(score<5);
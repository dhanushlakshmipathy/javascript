//for loop
for(let i=0;i<4;i++){
    console.log(i);
    if(i==2){
        console.log("Breaking the loop");
        break;
    }

}


for(let i=0;i<4;i++){
    for(let j=0;j<3;j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

//BREAK AND CONTINUE
for(let i=0;i<4;i++){
    if(i==2){
        console.log("Breaking the loop");
        break; //it will break the loop when i is 2
    }
    console.log(i);
}
for(let i=0;i<4;i++){
    if(i==2){
        console.log("Skipping the iteration");
        continue; //it will skip the iteration when i is 2
    }   
    console.log(i);
}
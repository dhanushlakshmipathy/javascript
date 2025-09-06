//filter

const coding=["js","python","java"];

const values=coding.forEach((item)=>{
    // console.log(item);
    return item
})

console.log(values);


const myNums=[1,2,3,4,5,6];
// const newNums=myNums.filter((num)=>{
//     return num>4
// })

const newNums=[]

myNums.forEach((num)=>{
    if (num>4){
        newNums.push(num);
    }
})

console.log(newNums);
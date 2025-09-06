//foreach 
const coding=["cpp","java","python","r","c"];

// coding.forEach(function (item) { console.log(`this is a coding language ${item}`)});

// coding.forEach((item)=>{console.log(item)});


// function  printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName: "JavaScript",
        langaugeFileName:"js"
    },
    {
        languageName:"C++",
        langaugeFileName:"Cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langaugeFileName)
})

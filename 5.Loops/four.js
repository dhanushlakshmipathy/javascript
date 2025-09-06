//for in loop 
//for objects use this.

const myObject={
    'game1':'NFS',
    'game2':'Spider-man',
    'game3':'Hollow Knight',
    'game4':'Silk song',
    'game5':'Red Dead Redemption 2'
}

for(const key in myObject){
    console.log(`The key for this objects are : ${myObject[key]}`);
}

const programming=["js","rb","python","java"];

for(const key in programming){
    console.log(programming[key]);
}
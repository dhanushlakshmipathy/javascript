//for of
//for arrays use this loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5,6];
//for (const iterator of object){ //object can be array, string that this anything/
//}
for(const num of arr){
    console.log(num);
}

const name="Dhanush";

for(const vari of name){
    console.log(`next letter ${vari}`);
}

//Maps

const map=new Map();
map.set('IN','India');
map.set('USA','United States of America');
map.set('RUS','Russia');
map.set('CHN','China');
map.set('IN','India');

console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject={
    'game1':'NFS',
    'game2':'Spider-man',
    'game3':'Hollow Knight',
    'game4':'Silk song'
}

// for this object the above for of wont work
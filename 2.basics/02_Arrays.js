const marvel_heroes=    ["Ironman","Spiderman","Thor","Hulk"]; 
const dc_heroes= ["Batman","Superman","Flash","Aquaman"]; 

marvel_heroes.push("Black Panther"); // adds to the end of the array 
console.log(marvel_heroes); 

const all_new_heroes=[...marvel_heroes,...dc_heroes]; //spread operator to combine two arrays 

//console.log(all_new_heroes);

const another_array=[1,2,3[4,5],6]; //nested array 

const real_another_array=another_array.flat(Infinity); //flat method to flatten the nested array 


console.log(Array.of(score1,score2,score3));
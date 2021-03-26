//Arrays
// An array is a collection of information inside a variable

//const arr = new Array(100); you can create arrays this way but not common

const arr = [1,2,3,4];
const arr2 = [8,9,10,11];
//arr.push(2); you can push to the array
let arr3 = [...arr,5,6,7,...arr2];
//arr2.push(5);

const arr4 = arr2.map( function(num){
    return num*2;
});


console.log(arr3);
console.log(arr);
console.log(arr4);
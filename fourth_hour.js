//How to clone array

// simple method 
// let array1 = [ 'item1','item2'];
// let array2 = [ 'item1','item2'];
// array1.push('item3');
// console.log(array1===array2);

// Proper method

// Using slice method (Fastest method)

let array1 = [ 'item1','item2'];
// *****************************************
let array2 = array1.slice(0);
// *****************************************
array1.push('item3');
console.log(array1===array2);



// Using concatination method

let array3 = [ 'item1','item2'];
//*************************** */
let array4 = [].concat(array1);
//*************************** */
array1.push('item3');
console.log(array1===array2);

//  Clone array using spread opertaor 

let array5 = [ 'item1','item2'];
// *****************************************
let array6 = [...array1,'item3','item4','item5',...array3];        // Uisng three dots
// *****************************************

array1.push('item3');
console.log(array1===array2);

console.log(array6);
//************************************* */
// for loop in array
let fruits1= ['apple','mango','grapes','banana'];
console.log(fruits1.length);
let fruits =[];
for (let n = 0;n<fruits1.length ; n++)
{
    fruits.push(fruits1[n].toUpperCase());
}
console.log(fruits);

//************************************* */


// Using const for creating array 

const pi = 3.14;
console.log(pi);

// const pi = 3;
// pi=2;           we cannot assign new element  with const

const fruits4 = ['apple','banana'];
fruits4.push('pineapple');
console.log(fruits4);
 // but we cannot assign new things by assigning new [] square brackets
 // fruits4 =['orange']; this will give an error

 

 
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

 //************************************ */
 //while loop in array

 const newArray=[...array6];
 let n = 0;
  while (n < newArray.length)
  {
    console.log(newArray[n]);
    n++;
  }
 


  //for of loop in array

  for(let item of newArray){
    console.log(item);
  }


   //for in loop in array gives the index of the array element

   for(let index in newArray){
    console.log(index);
    console.log(newArray[index]);
  }


  // array destructuring

  const myArray = ['value1','value2','value3'] ;
  let [myvar1,myvar2]= myArray;
  console.log(myvar1);
  console.log(myvar2);

//******************************************************* */
let [myvar5,...newMyArray] = myArray;
console.log(newMyArray);
  




 
// to determine the type of string
// data types 
// String,number , booleans , undefined, null BigInt ,Symbol 

let age = 22;
let firstName= " manish";
console.log(typeof age);
console.log(typeof firstName);
 

// convert number type to string
console.log(typeof age);
console.log(typeof (age +""));

age = age +"";
console.log(typeof age);

// convert string to number 

let num1= "123456";
console.log("num1 is of type" ,typeof num1);

num1= + num1;
console.log("num1 is of type" ,typeof num1);

// Second method to change number into string 
 age =18;
 age = String(age); // use of String function
 console.log("age is of type" ,typeof age);
// Second method to change string into number 
 let num2 = "123231";
 num2 = Number(num2); // use of Number function
 console.log("num2 is of type" ,typeof num2);
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

//  String concentiantion

let string1="Manish ";
let string2 ="Singh";

let fullName = string1 + " "+ string2;
 console.log(fullName);

//  Template string 

sent = "My name is " + fullName + " and my age is " + age;
console.log(sent);
// ***************************************
let aboutMe = `You are ${fullName} and your age is ${age}`;
// ****************************************
console.log(aboutMe);

//undefined
let lastName;
var num4;
console.log(typeof lastName);
lastName ="Mani";
console.log(typeof lastName,lastName);

//***  const notDefined; you cannot leave const variable undefined 

//null

var myData = null;
console.log(typeof myData, myData);
// **** Type of null shows object is a bug 

myData =1234;
console.log(typeof myData, myData);

// Bigint 

let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER) // to see how much size of number we can store in integer

//**BigInt allows us to store very big numbers */

myNumber = BigInt(2333333333333333333312312312312312312312);
let alsoNumBig = 32476246123461283641234n;

//Bigint operations are done only with Bigint
console.log(myNumber + alsoNumBig);


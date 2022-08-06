"use strict";
var name ='Manish';
console.log(name);
let address = "India";
console.log(address);
const num= 10;
console.log(num + 25);

//to remove spaces from string

let name1 = "            GerMany      ";
console.log(name1.length);
let name2= name1.trim();
console.log(name2);
console.log(name2.length);

// to print the last letter of the string

console.log(name2[name2.length-1]);

//to upper case all characters

console.log(name1.toLocaleUpperCase().trim());
let _name1=name1.toLocaleUpperCase().trim();
console.log(_name1);

// to lower all characters 

console.log(_name1.toLowerCase());

//slicing in string

let name3 = "abcdefghijklmmnopqrstuvwxyz"
console.log(name3.slice(0,4));
console.log(name3.slice(4));
console.log(name3.slice(4,10));
console.log(name3.slice(-4,-8));









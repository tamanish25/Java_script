// Object (reference type_)
const person={ name :"Harshit", age :22, hobbies:["Guitar","football","reading"]}
console.log(person);
console.log(person.name);
console.log(person.age);
 
// To add the key value pair in Object 

 person.gender ='male';
 console.log(person);

 // Bracket Vs dot notation 

//  console.log(person["name"]);  // bracket notation
//  console.log(person.name);     // dot notation 

//  when the name is big then use bracket notation 

// person["person hobbies"] = "reading";

//************************************************* */

// for in loop in Object

for (let key in person){
    // console.log(person[key]);

    console.log (`${key}: ${person[key]}`  )
}


// Object funtion 

console.log(Object.keys(person));  //*

//for of in objects

for(let key of Object.keys(person))
{
    console.log(person[key]);
}







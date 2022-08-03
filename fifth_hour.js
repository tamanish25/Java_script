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


// Object.keys funtion 

console.log(Object.keys(person));  //*

//for of in objects

for(let key of Object.keys(person))
{
    console.log(person[key]);

}


//Computed properties

const key1 = 'objkey1';
const key2 = 'objkey2';

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
[key1] : value1,
[key2] : value2,

}
console.log(obj);

const obj1={};
obj1[key1] = value1;
obj1[key2] = value2;

console.log(obj1);

//spread operator in objects

const newObject ={...obj1,key69:"value78",key22:"Beautiful",...person};
console.log(newObject);


const newIteration ={..."abcdefgh"}
console.log(newIteration);


//Object destructuring
const band ={
    bandName: "led zepplin",
    famoussing : "stairway to heaven",
    year : 1968
};
const {bandName,famoussing,...restValues} = band;
// (bandName) = 'queen';
console.log(bandName);
console.log(restValues);

// Object inside array

const users =[
    {userID :1, firstName:'harshit',gender:'male'},
    {userID :2,firstName: 'mohit',gender:'male'},
    {userID :3,firstName: 'nitish',gender:'male'},
];

for(let user of users)
{
    console.log(user);
}

// Nested destructuring

const [{firstName: user1firstname,userID},,{gender: user3Gender}]= users;
console.log(user1firstname,userID);
console.log(user3Gender);



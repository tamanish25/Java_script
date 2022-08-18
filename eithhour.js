{// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access   console.log(number[2])
// Order is not guaranteed
// unique items only (no duplicates allowed)  new Set([1,2,3,4,5])
{
const items = ['item1', 'item2', 'item3'];

const numbers = new Set(); /// this is how set are made *********

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);
if(numbers.has(1)) // for searching th element in set
{
    console.log("1 is present");
}else{
    console.log("1 is not present");
}

for(let number of numbers){
    console.log(number);
 }

}


 {
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);
}

}

{// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
{
const person = {
    firstName : "Manish",
    age: 27,
    1:"one"
}
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person[1]);
for(let key in person){      // for checking the type of key values
    console.log(typeof key);
}

}

{

//  Map storing key value pair 

const person = new Map();
person.set('firstName', 'Manish');
person.set('age', 27);
person.set(1,'one');
person.set([1,2,3],'onetwothree');
person.set({1: 'one'},'onetwothree');
console.log(person);
console.log(person.get(1));   // to get the value of key 1
for(let key of person.keys()){
    console.log(key, typeof key);
}
for(let [key, value] of person){ 
    // destructuring format
    // console.log(Array.isArray(key));
    console.log(key, value)
}

}

{

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshita"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
}
}


{
// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {'key69': "value69",...obj};
// obj2 = Object.assign({'key69': "value69"}, obj);  another method of cloning
obj.key3 = "value3";
console.log(obj);
console.log(obj2);
}



{
    // optional chaining  (?.) question mark dot  to avoid the null or undefined values error

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber);
}

{

    // methods
    // Methods are function inside object
    
    function personInfo(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
    
    const person1 = {
        firstName : "harsh",
        age: 8,
        about: personInfo
    }
    const person2 = {
        firstName : "mohit",
        age: 18,
        about: personInfo
    }
    const person3 = {
        firstName : "nitish",
        age: 17,
        about: personInfo
    }
    
    person1.about();
    person2.about();
    person3.about();
    
    
    }
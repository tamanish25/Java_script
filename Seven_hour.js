{
    // Parameters destructuring

const person = {
    firstName :"Manish",
    gender : "male",
}
function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);  

}
function printData({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}
printDetails(person);
printData(person);
}


{
//CallBack Function

function myFunk(callback){
    console.log("Hello World");
    callback();
    

}
 function myFunk1(){
    console.log("Insert function in a ")

 }
myFunk(myFunk1);

}


{
//functiion returing function

function myFunc(){
    function hello(){
       return  "hello world";
    }
    return hello;
}
const ans = myFunc();
console.log(ans());

}



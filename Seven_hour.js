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
//function returing function

function myFunc(){
    function hello(){
       return  "hello world";
    }
    return hello;
}
const ans = myFunc();
console.log(ans());

}


// Higher order function  are those functions which take funtion and return funciton

// *************************************************************************

//Important array Methods
  
// forEach
{const numbers=[1,2,3,4,5];
 
 function multiplyBy2(number,index){
    console.log("index is  ", index);
    console.log(number*2);

 }
//  multiplyBy2(numbers[0],0);
//  multiplyBy2(numbers[2],2);
//  for (let item=0;item<numbers.length;item++)
//  {
//  multiplyBy2(numbers[item],item)};


numbers.forEach(multiplyBy2);  // forEach funtion passes index and item to the function
}


{
    const numbers = [1,2,3,4,5,6,7];
    numbers.forEach(function(number,index){
        console.log("index is  ", index);
        console.log(number*2);
    })
}


{
    const users=[
        {firstName : "Manish", age:21},
        {firstName : "Arihant ", age:33},
        {firstName : "Shashank", age:45},
        {firstName : "Bhola", age:99}
    ];
    users.forEach(function(user){
        console.log(user.firstName,user.age);
    })
}


{
    // map method 

    const numbers=[1,2,3,4,5,6,7];
   const squareNumber= numbers.map(function(number,index){
        return `Index :${index} Square: ${number*number}`;

    })
    console.log(squareNumber);
}



{
    // filter method  : Always return a boolean value

    const numbers = [1,2,3,4,5,6];
    const isEven = function(number){
        return number % 2 ===0;
    }
    const evenNUmbers = numbers.filter(isEven);
    console.log(evenNUmbers);

}


{
    // Reduce Method 

    const array  =[2,3,4,5,6,99];
    const greatestNumber=array.reduce((accumulator,reduce)=>{
        if (accumulator > reduce){return accumulator;}
                else{ return reduce;}
    })
    console.log(`The greatest number in the array is ${greatestNumber}`)
}
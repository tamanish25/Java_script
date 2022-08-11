// funtion expression: When we make funtion inside a variable

const sumOfthreeNumbers = function(numb1,numb2,numb3){
    return numb1+numb2+numb3;}

const ans = sumOfthreeNumbers(3,4,5);
console.log(ans);

//Arrow functions

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans1 = sumThreeNumbers(2,3,4);
console.log(ans1);

// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;


console.log(isEven(4));

const firstChar = anyString => anyString[0];

console.log(firstChar("harshit"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}


//****  *hoisting : Funtion can be called before declaration.
// In case expression funtion and arrow function it will give and error

 hello();

 function hello(){
    console.log("Hello World");
 }

function app() {
    const myFunc=() =>{
        console.log("Hello from myFuc");
    }
    const addTwo= (num1,num2)=>{
        return num1+num2;
    }
    const multiplyTwo= (num1,num2)=>num1*num2;
    console.log("inside app");
    myFunc();     //Functions can be called inside a function.

}
 
app();


//Lexical Scope

function myApp()
{   const myVar = "value1";
    function myFunk (){
        const myVar="value50";
        console.log("Inside myFunk",myVar); // myVar is searched inside a lexical environment
    }
    const myFunk1 = function(){}
    const myFunk2 = () => {}
    console.log(myVar);
    myFunk();
}

myApp();




// if else condition
let age = 19;
if (age >18){
  console.log("User can Play")
}
else{
    console.log("User is not alowed")
}

//  remainder operator
let num = 13;
if(num%2== 0)
{console.log("Number is even");}
else {console.log("Number is odd");}

// truthly and falsy values
// falsy values
// false ,' ',null,undefined ,0 is by default false

let name ="";
if (name){
    console.log(name);}
    else{console.log("Empty name");
}

// ternary operator

let age1 =20;
// let drink;
// if (age >=5){
//     drink = "coffee";
// }
// else{drink = "milk"}


 //** *similar opration using ternary operator
let drink = age1 >5 ? "coffee" : "milk";
  console.log(drink);
//switch statement
let day = 5;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
// Default statement
    default:
        console.log("Invalid Day");

}



// while loop

let i=0;
while (i<=24){
    console.log(i);
    i++;
}
console.log(`Current value of i is ${i}`);

// Sum of first n natural numbers using whil loop

let n= 0;
let sum=0;
while(n<10){
    n++;
    sum+=n;
}

console.log(`Sum of first 10 natural number is ${sum}`);
//  for loop 

for(let n =0;n<=10;n++) 
{
    console.log(n);
}

//sum of first n natural numbers using for loop

mSum =0;
for(let i = 0 ; i<=10 ; i++)
{
    mSum+=i;
}

console.log(`Sum of first 10 natural number is ${mSum}`);


//Break keyword
// for(let i = 1 ; i<=10 ; i++)
// {
//     if(i==4){
//     break;    // break statement 
//     }
//     console.log(i);
// }

console.log("Hello there");

//continue keyword
for(let i = 1 ; i<=10 ; i++)
{
    if(i==4){
    continue;    // continue statement 
    }
    console.log(i);
}


//  do while loop

i =10;
do{
    console.log(i);
    i++;

}while(i<=9);
console.log("Value of the number is ",i);


// Introduction to arrays 
let fruits = 'Apple';
console.log(fruits);

// ordered collection of items 

let flower =['Rose','lilly','lotus'];
 console.log(flower);
 console.log(flower[2])

 let mix = ["apple",null,undefined,123324];
 console.log(mix);

 mix [1]=123;        // Arrays are mutable and reference type (Object)
 mix [2]="MAN"
 console.log(mix);

 console.log(typeof flower);

 console.log(Array.isArray(flower)); // Array.isArray(flower) to check for arrays




 


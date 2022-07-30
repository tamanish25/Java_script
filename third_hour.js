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


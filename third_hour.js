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

// Sum of first n natural numbers 

let n= 0;
let sum=0;
while(n<10){
    sum+=n;
}

console.log(`Sum of first 10 natural number is ${sum}`);
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

{
    // Sorting

    // sort() only sort alphabets and Capital letter first but dont sort numbers 

    array1 = ['cat','dog','hat','ball','parrot'];
    console.log(array1);
    console.log(array1.sort());


    num=[43,54,34,76,99,100,2,3,1,55,64,90];
    console.log(num);
    num.sort((a,b)=>a-b);  // for sorting the number this system in ascending order and b-a for decending order
    console.log(num);


    //Sorting in an object

    product=[
        {productCode:1,productName:'P1',price:200},
        {productCode:2,productName:'P2',price:4500},
        {productCode:3,productName:'P3',price:89900},
        {productCode:4,productName:'P4',price:10},
        {productCode:5,productName:'P5',price:100000}
    ];
    console.log(product);
    sortInAscending = product.slice(0).sort((a,b)=>
    {return a.price-b.price});
    console.log(sortInAscending);

    sortInDescending = product.slice(0).sort((a,b)=>
    {return b.price-a.price});
    console.log(sortInDescending);
}


{
    console.log("Manish")
    
    

}

{//Find method
    const users = [
        {userId : 1, userName: "harshit"},
        {userId : 2, userName: "harsh"},
        {userId : 3, userName: "nitish"},
        {userId : 4, userName: "mohit"},
        {userId : 5, userName: "aaditya"},
    ];
    
    const myUser = users.find((user)=>user.userId===3);
    console.log(myUser);
}


{// Every method
    const userCart = [
        {productId: 1, productName: "mobile", price: 12000},
        {productId: 2, productName: "laptop", price: 22000},
        {productId: 3, productName: "tv", price: 35000},
    ]
    
    
    const ans = userCart.every((cartItem)=>cartItem.price < 30000);
    console.log(ans);
   
}


{
    // some method
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);
}


{// fill method
const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray);
}


{
 //********* */ splice method ***********
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3','item4'];

// delete
const deletedItem = myArray.splice(1, 2);
console.log("deleted item", deletedItem);
console.log(myArray);
}

{ 
    // insert
     const myArray = ['item1', 'item2', 'item3','item4'];      
     myArray.splice(2, 0,'inserted item');
     console.log(myArray);
           
}
{
    {
        // insert and delete 
        const myArray = ['item1', 'item2', 'item3','item4'];   
        const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
        console.log("delted item", deletedItem);
        console.log(myArray);
    } 
    
}



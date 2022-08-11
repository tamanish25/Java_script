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
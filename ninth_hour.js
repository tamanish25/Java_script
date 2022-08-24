{
    const user1 = {
        firstName : "harshit",
        age: 8,
        about: function(){
            console.log(this.firstName, this.age);
        }   
    }
    
    // don't do this mistake 
    
    user1.about();
    //const myFunc = user1.about; // this is wrong
    myFunc();
    const myFunc1 = user1.about.bind(user1); // this syntax is right
    myFunc1();
}

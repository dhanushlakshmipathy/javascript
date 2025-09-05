const user={
    username: "Dhanush",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage();


user.welcomeMessage();

const chai= () => {
    let username="dhanush"
    console.log(this);
}

// chai();

const addTwo =(num1,num2) =>  (num1+num2);

const addTwo1=(num1,num2) => ({username:"Dhanush"})

console.log(addTwo(2,3));
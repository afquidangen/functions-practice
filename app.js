function greet () {
    console.log("Hello there!");
}

greet(); //call the function name

//function parameters
//function declaration
function sayHello(username) {
    console.log(`Hello ${username}`) //this line of code executed hello 
}
sayHello("I am BSCS 2"); //username = I am BSCS 2

//return statement
//function expression
function add(numberOne, numberTwo){
    return numberOne + numberTwo
}
const result = add(10,40);
console.log(result);

const greetings = function(user) {
    console.log(`Hello ${user}`);
}
greetings("I am developer");

//scope
//global scope
let textMessage = "Hi";
function displayMessage() {
    console.log(textMessage);
}
displayMessage();

//local scope
function showMessage() {
    let localMessage = "Hello";
    console.log(localMessage);
}
showMessage() //work fine
// console.log(localMessage); //error, local mess is not defined outside function

function showCallFunc(fn){
    const value = 10;
    fn(value); //calling the callback function
}
showCallFunc(function(value){
    console.log(value); //callback function logs the value
});

function greet(name, cb){
    console.log(`Hello ${name}`);
    cb();
}
function CallMe(){
    console.log("I am a callback function")
}
greet("Irvin", CallMe)
//Hello I am Irvin
// I am a callback function

const person = {
    name: "BSCS 2",
    age: "19",
    greet: function(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
};
console.log(person.greet());
// Hello, my name is BSCS 2 and I am 19 years old.

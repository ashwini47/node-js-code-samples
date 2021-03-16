//CALLBACKS and THIS
/*In other object-oriented programming languages, the this keyword always
 refers to the current instance of the class. Whereas in JavaScript, 
 the value of this depends on how a function is called.
 */

/*
 //This always represent owner (who invoke the funcation) context 
 //Example -1
 //
class WorkClass{
    work(){
        this.topFuncation()
    }
     topFuncation(callbakfun=()=>{
        console.log('this=',this)}){
        callbakfun();
    }
}

var work=new WorkClass();
work.work(); //this= WorkClass {}
work.topFuncation(); //this= WorkClass {}
var x=work.topFuncation;
x(); //this= undefined

//Example- 2

const person = {
  firstName: 'John',
  lastName: 'Doe',
  printName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};
const printFullName = person.printName;
printFullName();//undefined undefined


//Bind() Example 
//https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be
//method to pass this refrence
//The bind method creates a new function and
//sets the this keyword to the specified object.
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}
greeting()//>>Hi, I am undefined and I am undefined years old
const greetingJohn = greeting.bind(john);
greetingJohn();//>>Hi, I am John and I am 24 years old
greeting.bind(jane)();//>>Hi, I am Jane and I am 22 years old


//Call ( )
//The call method sets the this inside the 
//function and immediately executes that function.
//Syntax: function.call(thisArg, arg1, agr2, ...)
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
// Hi, I am John and I am 24 years old
greeting.call(john);
// Hi, I am Jane and I am 22 years old
greeting.call(jane);


//Call () can also accept arguments
function greet(greeting) {
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
// Hi, I am John and I am 24 years old
greet.call(john, 'Hi');
// Hi, I am Jane and I am 22 years old
greet.call(jane, 'Hello');


*/
//Apply ( )
//The apply() method is similar to call(). 
//The difference is that the apply() method accepts an 
//array of arguments instead of comma separated values.
function greet(greeting, lang) {
  console.log(lang);
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
// Hi, I am John and I am 24 years old
greet.apply(john, ['Hi', 'en']);
// Hi, I am Jane and I am 22 years old
greet.apply(jane, ['Hola', 'es']);


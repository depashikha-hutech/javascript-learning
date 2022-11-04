//js array concact
const arr35=["sam","ram","moon"];
const arr47=["nil","saif"];
const arr121=["robim"];
const children =arr35.concat(arr47,arr121);
console.log(children);

//js object
let person213 ={
    firstname : "sai",
    lastname : "saf",
    age:90
} ;
console.log(person213.firstname + " " +person213.lastname);

//object literals
const person8 = {};
person8.firstName = "John";
person8.lastName = "Doe";
person8.age = 50;
person8.eyeColor = "blue"; 
console.log(person8.firstName + " is " + person8.age + " years old.");
//const person8 = new Object();
//it will same but as objectliterals
// object are mutables it adressed by refernce not values 
const personR = {
firstName : "John",
lastName : "Doe",
age : 50
};
 const l = personR;                                  //create acopy of personR
 l.age = 10;
 console.log(personR.firstName + " is " + personR.age + " years old.");
// js properties
//for...in loop executed for each property of object in once
const personM = {
    fname:"John",
    lname:"Doe",
    age:25
  }; 
  
  let text909 = "";
  for (let U in personM) {
    text909 += personM[U] + " ";
  }
  console.log (text909);
  // adding and deleting properties
  const aaa = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  aaa.nationality = "English";
console.log(aaa.firstname + " is " + aaa.nationality + ".");
  delete aaa.age; 
console.log(aaa.firstname + " is " + aaa.age + " years old.");
//nested object
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
  
}
console.log (myObj.cars.car2);
// this method in js object
const man = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}
console.log( man.fullName());
//adding method  to an object
console.log("my fatheris"+ man.fullName());
//built in methods  to uppercase()
let message ="weclome";
let G = message.toUpperCase();
console.log(G);
//display object properties
const hst={
  name: "geeta",
  age:80,
  city:"uk"
};
let txt12 = "";
for (let z in hst){
  txt12 += hst[z] +" ";

};
console.log(txt12);
//displaying object values
console.log(Object.values(hst));
//use of  stringfy 
var person7 = {
  name: "ram",
  today: new Date()
};
console.log(JSON.stringify(person7));
//getter method
const person80 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};
console.log (person80.lang);
//setter method
const person70 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};
  person70.lang = "en";
console.log( person70.language);
// iterables
const name333 = "W3Schools";

// List all Elements
let textem = ""
for (const x of name333) {
   console.log(textem = x + " ");
}
//set () add() in objects
const letters76 = new Set(["a","b","c"]);
letters76.add("h");
letters76.add("m");
// Display set.size
console.log (letters76.size);
//add variables
const letter44 = new Set();
const hj = "a";                      //create variable
const jk = "b";
letter44.add(hj);                  //add variable
letter44.add(jk);
console.log(letter44.size);
//for each method
const letters444 = new Set(["a","b","c"]);

// List all entries
let texttt = "";
letters444.forEach (function(value) {
  texttt += value;
})
console.log(texttt);
// mapping
const fruits67 = new Map([                            //set()
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
  ["kiwi",46]
]);
fruits67.set("guava",50);                           

console.log( fruits67.get("apples"));                  
console.log(fruits67.get("guava"));
console.log(fruits67.delete("kiwi"));                   //delete

console.log(fruits67.size);
//
fruits67.clear();
console.log(fruits67.size);
//function
//function declaration
var x3 = myfunction(4 , 3);
console.log(x3);
function myfunction(p,q)
{
  return p*q;

}
//function expression
const x4 =function (w , x)
{
  return w*x;
}
  console.log(x4(4 , 3));
//
const myFunction87 = new Function("a" ,"b", "return a* b");
console.log(myFunction87(9 , 3));
//constructor

const myFunction89 =  Function("a" ,"b", "return a* b");
console.log(myFunction89(9 , 13));
//function invoke
(function (){
  console.log("hello i called my self");
})();
// function as value
function myfunction987( g , h){
return g * h;
}
let x236 = myfunction987(8 , 9);
let y43 = myfunction987(4 , 5)* 4;     // function as expression
console.log ( x236);
console.log( y43);
// function as object
function myfunction497( g , h){
  return arguments.length;                      //argument.length property
}
console.log(myfunction497(5 , 8));
//to.string method
function myfunction876(x ,y) {
  return x * y;
}
console.log (myfunction876.toString());
// arrow function
const x91 = (x, y) => { return x * y };
console.log(x91(7, 9));
// default parametrs
function myfunction892(x, y){
  if (y === undefined){
    y = 8; 
  }
  return x * y;
}
console.log(myfunction892(4));
//default value to a function parameters
function myfunction82(x, y =7){
  return x * y;
}
console.log(myfunction82(4));
// largest no.

function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
console.log( findMax(4, 5, 6));
// sum of all arguments

function sumAll() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log( sumAll(1, 123, 500, 115, 44, 88));
// invoking  the function
function myfunction34(d , f){
  return d * f
}
console.log( window.myfunction34(12 , 9) );
// invoking function as method
const myObject ={
  firstName:"ram",
  lastName:"sai",
  fullName: function() {
    return this.firstName + " "+ this.lastName;
  }
}
console.log( myObject.fullName());
//function constructor
function myFunction21(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

const myObj90 = new myFunction21("jhon","lia")
console.log (myObj90.firstName); 
//js closure
let k8 = 9;                             //varaible outside the function 
myFunction123();

function myFunction123() {
  let a = 4;                            //all variables defined inside the function
  console.log (a * a);
  console.log (k8 * k8);
}
// variable created without declaration of keywords
myFunctionnnn();
   console.log(a9 * a9);

function myFunctionnnn() {
  a9 = 4;
}
//counter
let counter = 0;

// Function to increment counter
function add9() {
  counter += 1;
}
add9();
add9();
add9();
console.log ("The counter is: " + counter);
//async
//function sequence
function myDisplayer(some) {
  console.log( some);
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
//
function myDisplayer9(some5) {
  console.log (some5);
}

function myFirst7() {
  myDisplayer("Hello hii");
}

function mySecond7() {
  myDisplayer("Goodbye byy");
}

mySecond7();
myFirst7();
// sequence controller
function myDisplayer36(some) {
  console.log(some);
}

function myCalculator(num1, num2) {
  let sum90 = num1 + num2;
  return sum90;
}

let result8 = myCalculator(5, 5);
myDisplayer36(result8);
//js callbacks
function myDisplayer33(some) {
  console.log(some);
}

function myCalculator3(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result66 = myCalculator3(3, 5);
myDisplayer33(result66);

// js asynchronous
//set time out 

setTimeout(myFunction871, 1000);                  //  myFunction is used as a callback.

//myFunction is passed to setTimeout() as an argument.

//1000 is the number of milliseconds before time-out, so myFunction() will be called after 1 seconds.

function myFunction871() {
  console.log ("hii hello !!");
}
// wating

setInterval(myFunction12, 5000);

function myFunction12() {
  let d = new Date();
  console.log(
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds());
}












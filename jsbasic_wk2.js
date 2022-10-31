//sorting in array
const fruits5 =["orange","apple","pear","mango"];
fruits5.sort();
console.log(fruits5);
//reverse and sort the array
const name=["sira","dipti","prita","tina"];
name.sort();
name.reverse();
console.log(name);
//numeric sort
const num =[2,54,6,79,100,32];
 num.sort(function (a, b){return a - b});
 console.log(num);
 // array sort descending
 const num1 =[21,548,680,79,10];
 num1.sort(function (a, b){return b - a});
 console.log(num1);
 //find lowest no. from array
 const points6 = [40, 100, 1, 5, 25, 10];
points6.sort(function(a, b){return a - b});
console.log(points6[0]);
//
const points7 = [40, 100, 1, 5, 25, 10];
points7.sort(function(a, b){return b-a});
console.log (points7[0]);
//higest no. using math.max
const points8 = [40, 100, 1, 5, 25, 10]
console.log (myArrayMax(points8));

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
//lowest no.using math.min
const points9 = [40, 100, 1, 5, 25, 10]
console.log (myArrayMin(points9));

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

// array map
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

console.log (numbers2);

function myFunction(value, index, array) {
  return value * 2;
}
//array filter
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

console.log(over18);

function myFunction(value, index, array) {
  return value > 18;
}
//array reduce method
const numbers11 = [45, 4, 9, 16, 25];
let sum = numbers11.reduce(myFunction);

console.log( "The sum is " + sum);

function myFunction(total, value, index, array) {
  return total + value;
}
const numbers12 = [45, 4, 9, 16, 25];
let add = numbers12.reduce(myFunction,100);

console.log( "The add is " +add);

function myFunction(total, value) {
  return total + value;
}
//every() in array
const numbers14 = [45, 4, 9, 16, 25];
let allOver18 = numbers14.every(myFunction);
 console.log ("All over 18 is " + allOver18);

function myFunction(value) {
  return value > 18;
}
const numbers15 = [45, 4, 17, 17,17, 5];
let allOver17 = numbers15.every(myFunction);
 console.log ("All over 17 is " + allOver17);

function myFunction(value) {
  return value  > 17;
}
//find () array
const numbersA = [4, 9, 6, 25, 29];
let first = numbersA.find(myFunction);
console.log ("First number over 18 is " + first);

function myFunction(value, index, array) {
  return value > 18;
}
//find () array
const numbersb = [14, 19, 16, 25, 29];
let second = numbersb.find(myFunction);
console.log ("second number over 9 is " + second);

function myFunction(value, index, array) {
  return value > 9;
}
//find index()
const numbersd = [4, 49, 16, 25, 29];

    console.log ("third number over 18 has index " + numbersd.findIndex(myFunction));
function myFunction(value, index, array) {
  return value > 18;
}
//
// Create an Array:
const cars9 = ["Saab", "Volvo", "BMW"];

// Change an element:
cars9[0] = "Toyota";

// Add an element:
cars9.push("Audi");

// Display the Array:
 console.log (cars9);
 //new date
 const d = new Date();
console.log (d);
//create a specific date
const d1 = new Date(2018, 11, 24, 10, 33, 30, 0);
 console.log(d1);
 //universal date
 const d2 = new Date(0);
console.log (d2);
//
const d3 = new Date();
 console.log (d3.toUTCString());
 //date to string
 const d4 = new Date();
 console.log( d4.toDateString());
 //date to iso string
 const d7 = new Date();
 console.log(d7.toISOString());
 //date.parse
 const msec = Date.parse("March 21, 2012");                //return milisecond from date to 1 jan 19700
 console.log(msec);
 //math methods
 console.log(Math.round(4.6));
 console.log(Math.ceil(4.2));
 console.log(Math.floor(4.9));
 console.log(Math.trunc(4.8));
 console.log(Math.sign(4));
 console.log(Math.sign(-14));
 console.log(Math.pow(8,4));
 console.log(Math.sqrt(64));
 console.log(Math.abs(-4.4));
 console.log(Math.min(-4.4,56,-98,67,900));
 console.log(Math.max(-4.4,34,45,800,98));
 console.log(Math.random());
 console.log(Math.log(10));
 console.log(Math.log2(8));
 console.log(Math.log10(1000));
//maths.random()
 console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 101));

// boolean method
console.log(Boolean(10 > 9));
console.log("100 is " + Boolean(100));
console.log("3.14 is " + Boolean(3.14) );
console.log("-15 is " + Boolean(-15));

console.log("Any (not empty) string is " + Boolean("Hello") )
console.log("Even the string 'false' is " + Boolean('false'));
console.log("Any expression (except zero) is " + Boolean(1 + 7 + 3.14));
// if condition
if (new Date().getHours() < 18) {
console.log( "Good day!");
}
//if else con
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
 }
 console.log (greeting);
 //else if condition
 const time = new Date().getHours();
let greeting1;
if (time < 10) {
  greeting1 = "Good morning";
} else if (time < 20) {
  greeting1 = "Good day";
} else {
  greeting1 = "Good evening";
}
console.log (greeting1);
//switch case
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log ("Today is " + day);
// default command
let text34;
switch (new Date().getDay()) {
  case 6:
    text34 = "Today is Saturday";
    break;
  case 0:
    text34= "Today is Sunday";
    break;
  default:
    text34 = "Looking forward to the Weekend";
}
console.log (text34);
// common code block
let text56;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text56 = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text56 = "It is Weekend";
    break;
  default:
    text56 = "Looking forward to the Weekend";
}
console.log( text56);
// for loop

let text78 = "";

for (let i = 0; i < 5; i++){

 console.log (text78 = "The number is " + i); 

}
// for in loop
const person = {fname:"John", lname:"Doe", age:25}; 

let txt86 = "";
for (let x in person) {
  txt86 += person[x] + " ";
}

console.log (txt86);
//for in loop
const numbers78 = [45, 4, 9, 16, 25];

let txt47 = "";
for (let x in numbers78) {
  console.log( txt47 = numbers[x] + ""); 
}
//looping over string
let language = "JavaScript";

let text76 = "";
for (let x of language) {
 console.log (text76 = x +" ");
}
 //while loop
 let text33 = "";
let i = 8;
while (i < 20) {
  console.log(text33 = "The number is " + i);
  i++;
}
//do while
let text88 = ""
let m = 3;

do {
  text88 = "The number is " + m;
  m++;
}
while (m < 10);  

console.log( text88);
//iterating over strings
//  String
const namep = "W3Schools";

// List all Elements
let text77 = ""
for (const x of namep) {
 console.log (text77 = x + "");
}
//iterating over array
const letters = ["a","b","c"];

// List all Elements
let text44 = "";
for (const x of letters) {
 console.log( text44 = x + "");
}
// set
// Create a Set
const letters7 = new Set();

// Add Values to the Set
letters7.add("a");
letters7.add("b");
letters7.add("c");

// Display set.size
console.log(letters7.size);
//// Create a new Set
const letters8 = new Set(["a","b","c"]);

// Add a new Element
letters8.add("d");
letters8.add("e");

// Display set.size
console.log(letters8.size);
// map
const fruits6 = new Map([                //get method
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log( fruits6.get("apples"));
fruits6.set("apples", 200);              //set method

console.log (fruits6.get("apples"));
console.log (fruits6.size);          //size property
//delete an element
fruits6.delete("apples");
console.log(fruits6.size);
// has method
fruits6.delete("apples");
console.log (fruits6.has("apples"));
 console.log(fruits6.has("oranges"));
//type of operator

console.log(typeof"jhon");
console.log(typeof "John");                 
console.log(typeof 3.14);                  
console.log(typeof NaN      );            
console.log(typeof false  );                
console.log(typeof [1,2,3,4]  );            
console.log(typeof {name:'John', age:34} );
console.log(typeof new Date());             
console.log(typeof function () {});         
console.log(typeof myCar ) ;                
console.log(typeof null);  
//
let t = 123;
console.log
( t.toString() );
   
//bit wise 
 console.log (5 & 1);
 //or
console.log(5|1);
//xor
console.log(5^1);
//not
console.log(l=~5);
//left shift
console.log(x =5 << 1);
//right shift
console.log(w = -8>>1);
//(zero fill)right shift
console.log(q= 4>>>2);
//
 text92 = "Visit W3Schools!"; 
let n = text92.search("W3Schools");
console.log (n);
//operator precedence
console.log(100+50*3);
console.log((100+50)*3);
console.log (100/50*3);
//errors
try{
adddlert("Welcome guest!");
}
catch(err) {
  console.log(err.message);
}

//scope
let carName = "Volvo";
myFunction5();

function myFunction5() {
  console.log ("I can display " + carName);

}
//js classes
class Car9 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar9 = new Car9("Ford", 2014)
 console.log(myCar9.name + " " + myCar9.year);
 //class method
 class Car74 {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar74 = new Car74("Ford", 2018);
console.log("My car is " + myCar74.age() + " years old.");
// arrow function
let myFunction7 = (a, b) => a * b;
console.log( myFunction7(4, 5));
//
let hello = "";

hello = () => {
  return "Hello World!";
}
console.log( hello());

//arrow function with parameters
let hello9 = "";

hello9 = (val) => "Hello " + val;

console.log( hello9("Universe!"));
//class
class Car22 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar22 = new Car22("Ford", 2014);

console.log(myCar22.name + " " + myCar22.year);
//js json
const myobj={name:"jhon",city:"up",age:56};
console.log(myobj.name);
//modify js object
const myobj1={name:"jhon",city:"up",age:56};
myobj1["name"]="ram";
console.log(myobj1.name);
//parse()
const txt88 = '{"name":"John", "age":30, "city":"New York"}'
const obj5 = JSON.parse(txt88);
console.log (obj5.name + ", " + obj5.age);
//parse array()
const text43 = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text43);
console.log (myArr[0]);
console.log (myArr[3]);
//date
 //dateobject is not allowed in json it  written in string
 const text31 = '{"name":"John", "birth":"2022-8-1", "city":"New York"}';
const obj56 = JSON.parse(text31);
obj56.birth = new Date(obj56.birth);
console.log (obj56.name + ", " + obj56.birth); 
//function 
//funtion is not allowed so convert it into string
const text06 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj09 = JSON.parse(text06);
obj09.age = eval("(" + obj09.age + ")");
console.log (obj09.name + ", " + obj09.age());
//stringify
//convert a JavaScript object into a string with JSON.stringify().
const obj64 = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj64);
console.log (myJSON);
//
// Storing data:
const myObj82 = { name: "John", age: 31, city: "New York" ,book:"cv"};
const myJSON5= JSON.stringify(myObj82);
localStorage.setItem("testJSON", myJSON5);
// Retrieving data:
let text04 = localStorage.getItem("testJSON");
let obj82 = JSON.parse(text04);
console.log (obj82.name + " ,"+obj82.book);
//date object into string
const obj230 = {name: "John", today: new Date(), city: "New York"};
const myJSON81 = JSON.stringify(obj230);
console.log(myJSON81);
//0bj in json
const myObj700 = {"name":"John", "age":30, "car":null};
console.log (myObj700.name);
//acessing theobject

const myJSON444 = '{"name":"John", "age":30, "car":null}';
const myObj800 = JSON.parse(myJSON444);
console.log (myObj800.name);
//looping in object properties
const myJSON609 = '{"name":"John", "age":30, "car":null}';
const myObj990 = JSON.parse(myJSON609);

let text667 = "";
for (const x in myObj990) {
  text667 += x + ", ";
  
}
console.log (text667);
//looping object value
const myJSON689 = '{"name":"John", "age":30, "car":null}';
const myObj490 = JSON.parse(myJSON689);
let text677 = "";
for (const x in myObj490) {
text677 += myObj490[x] + ", ";
}
console.log (text677);
//creating array from json
const myJSON666 = '["Ford", "BMW", "Fiat"]';
const myArray076 = JSON.parse(myJSON666);
console.log( myArray076);
//filter function
const arr=[2,4,8,9];
arr.filter((item)=>{
console.log(item)
})
//how many time 4 occur
const arr89=[2,4,4,8,9];
let result =arr89.filter((item90)=>{
  return item90 ===4
  })
  console.log(result)
  // array value
  const myJSON231= '["Ford", "BMW", "Fiat"]';
const myArray564 = JSON.parse(myJSON231);
console.log( myArray564[0]);



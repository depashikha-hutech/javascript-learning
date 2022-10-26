document.write("<br />");
document.write("welcome to it");
document.write("<br />");
document.write("286");
document.write("<br />");
document.write(54+67);
document.write("<br />");
console.log("hello world");
document.write("<br />");
//operators
let a = 5;
let b = 4;
let c = a+b+(3*4);
console.log("the value of c is",c);
let bikename;
bikename="hero"
console.log("bikename");
//operator


var str1 ="hello";
var str2 ="world";
document.write(str1+""+str2);
document.write("<br />");


//variables
var x =2;
var y = 3;
var z =x+y;
console.log("value z",z);
const price1=8;
const price2=7;
let total =price1+price2;
console.log("total price",total);
//datatypes
var x =16;
var y ="hello world";
var flag =false;
var p;
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(flag));
console.log(typeof(p));

//getElementByID("").innerHtml
function changeContent(){
    document.getElementById("demo").innerHTML ="paragraph content changed.";
}
//function to compute the product p1 and p2
function myFunction1(p1,p2){
    return p1* p2;
}
console.log(myFunction1(22,4));
//
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  let f= toCelsius("43");
  console.log(f);
  //invoking the function
  function msg() {
    alert("hello!this is message");
  }
  msg();
  //
  function getcube(number){
    alert(number * number* number);
   }
   getcube(3);
   //
   let carName1 = "Volvo XC60";       // Double quotes
let carName2 = 'Volvo XC60';          // Single quotes
console.log(carName1 + " " + carName2); 
//string length
let text90 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 console.log (text90.length);
 //escape Sequence
 let text89= "We are the so-called \"Vikings\" from the north.";
console.log(text89); 
//
let text98 = "The character \\ is called backslash.";
console.log(text98);
//
let u = 5;
let v = 5;
let w = 7;
console.log(u == v);                      // checking the equality of two variables
console.log(v == w);                      // checking the equality of two variables

//empty values
let fff = " ";                           // The value is empty, the typeof is "string"
console.log(fff);

//type operator
typeof "";                               // Returns "string"
typeof "John";                           // Returns "string"
typeof "3";                              // Returns "string"
var g = 56;
console.log(typeof (g));                 // Returns number
//
function sayHello() {
  document.write("Hello there!");
} sayHello();

function concatenate(first, last) {
  var full;
  full = first + last;
  return full;
}
//console.log(concatenate("old", "gold"));

function secondFunction() {
  var result;
  result = concatenate('Zara', 'Ali');
  document.write(result);
} secondFunction();

document.write("<br>")
function sayHello1(name, age) {
  document.write(name + " is " + age + " years old.");
} sayHello1("anju", 22);

//JS objects
let emp = { id: 102, name: "Shyam Kumar", salary: 40000 }
console.log(emp);
console.log(emp.salary);                // extracting the property of an object
console.log(emp["name"]);               // extracting the property of an object

//method in JS object
const p1 = {
  firstName: "pavani",
  lastName: "koli",
  id: 5566,
  fullName: function () {
      return this.firstName + " " + this.lastName;
  }
};
console.log(p1.fullName());             // extracting the property of an object

let emp1 = {
  id: 102,
  name: "dolly",
  salary: 40000,
  detail: function () {
      return this.id + " " + this.name;
  }
};
console.log(emp1.detail());             // extracting the property of an object 

//JS String
var stringname = "string value";

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

let str = "John";
let obj = new String("John");
console.log(typeof (str) + " " + typeof (obj));

var strname = new String("hello javascript string");
console.log(strname);

//using escape char
let txt = "We are the so-called \"Vikings\" from the north.";
console.log(txt);

let txt1 = 'It\'s alright.';
console.log(txt1);

let txt2 = "The character \\ is called backslash.";
console.log(txt2);

const longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
console.log(longString);

//String methods
//-------------------------

//slice()
let strg = "Apple, Banana, Kiwi";
let part = strg.slice(7, 13);
console.log(part);

var s1 = "abcdefgh";
var s2 = s1.slice(2, 5);
console.log(s2);

var str3 = "Apples are round, and apples are juicy.";
var sliced = str3.slice(3, -2);
console.log(sliced);

let str4 = "Apple, Banana, Kiwi";
let part1 = str4.slice(-12, -6)
let part3 = str4.slice(-12);
console.log(part1);
console.log(part3);

let part2 = str4.slice(7);
console.log(part2);

document.write("<br />")
var str5 = "Javatpoint";
document.write(str5.slice(4));
var part4 = str5.slice(-4);
console.log(part4);
console.log((str5.slice(-5, -1)));

//substring()
let str6 = "Apple, Banana, Kiwi";
let part5 = str6.substring(7, 13);
console.log(part5);

var str7 = "Apples are round, and apples are juicy.";
console.log((str7.substring(1, 2)));
console.log((str7.substring(0, 10)));
console.log((str7.substring(5)));

var str8 = "Javatpoint";
console.log((str8.substring(5)));

var str9 = "Javatpoint";
console.log((str9.substring()));

//substr()
let str10 = "Apple, Banana, Kiwi";
console.log(str10.substr(7, 6));

let str11 = "Apple, Banana, Kiwi";
console.log(str11.substr(7));

let str12 = "Apple, Banana, Kiwi";
console.log(str12.substr(-4));

var str13 = "Apples are round, and apples are juicy.";
console.log((str13.substr(1, 2)));
console.log((str13.substr(-2, 2)));
console.log((str13.substr(1)));
console.log((str13.substr(-20, 2)));
console.log((str13.substr(20, 2)));

var str14 = "Javatpoint";
console.log((str14.substr(0, 4)));
console.log((str14.substr(5, 5)));
console.log((str14.substr(5)));
console.log((str14.substr()));
console.log((str14.substr(-5, 5)));

//replace()
let text4 = "Please visit Microsoft!";
let newText = text4.replace("Microsoft", "W3Schools");
console.log(newText);

let text5 = "Please visit Microsoft!";
let newText1 = text5.replace(/MICROSOFT/i, "W3Schools");
console.log(newText1);

let text6 = "Please visit Microsoft and Microsoft!";
let newText2 = text6.replace(/Microsoft/g, "W3Schools");
console.log(newText2);

var str15 = "Apples are round, and apples are juicy.";
var re = /apples/gi;
var newstr = str15.replace(re, "oranges");
console.log(newstr);

var re = /(\w+)\s(\w+)/;
var str16 = "zara ali";
var newstr1 = str16.replace(re, "$2, $1");
console.log(newstr1);

var str17 = "Javatpoint";
console.log((str17.replace("tpoint", "Script")));

document.write("<br />")
var str18 = " Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";
document.write(str18.replace(/Node.js/g, "AngularJS"));

document.write("<br />")
document.writeln(str18.replace(/Node.js/, "AngularJS")); //It will replace only first match  

document.write("<br />")
document.writeln(str18.replace(/Node.JS/g, "AngularJS"));  //replace() method is case-sensitive

document.write("<br />")
document.writeln(str18.replace(/Node.JS/gi, "AngularJS"));  //ignore case-sensitive behaviour of replace() method by using ignore flag modifier

//toUpperCase()
let text8 = "Hello World!";
let text9 = text8.toUpperCase();
console.log(text9);

document.write("<br />")
var str19 = "Apples are round, and Apples are Juicy.";
document.write(str19.toUpperCase());

var str20 = "javatpoint";
console.log((str20.toUpperCase()));

var str21 = "javatpoint TUTORIALS";
console.log((str21.toUpperCase()));

//toLowerCase()
let text10 = "Hello World!";       // String
let text11 = text10.toLowerCase();  // text11 is text10 converted to lower
console.log(text11);

var str22 = "JAVATPOINT";
console.log((str22.toLowerCase()));

var str23 = "JAVATPOINT tutorials";
console.log((str23.toLowerCase()));

//concat()
let txt3 = "Hello";
let txt4 = "World";
let txt5 = txt3.concat(" ", txt4);
console.log(txt5);

txt6 = "Hello".concat(" ", "World!");
console.log(txt6);

var txt7 = "Javatpoint";
var txt8 = ".com";
console.log(txt7.concat(txt8));

var txt9 = "Javatpoint";
var txt10 = ".com";
var txt11 = " Tutorials";
console.log(txt9.concat(txt10, txt11));
console.log(txt9.concat(txt10 + "" + txt11));

var str24 = new String("This is string one");
var str25 = new String("This is string two");
var str26 = str24.concat(str25);
console.log("Concatenated String :" + str26);

//trim()
let txt27 = "      Hello World!      ";
let txt28 = txt27.trim();                          //both sides of whitespace
console.log(txt28);
console.log(txt27.trimStart());
console.log(txt27.trimEnd());

//padding methods
let txt29 = "5";
let padded = txt29.padStart(4, "x");
console.log(padded);

let txt30 = "5";
console.log(txt30.padStart(4, "0"));

let numb = 5;
let txt31 = numb.toString();
console.log(txt31.padStart(4, "0"));

let txt32 = "5";
let padded2 = txt32.padEnd(4, "x");
console.log(padded2);

let txt33 = "5";
console.log(txt33.padEnd(4, "0"));

//extract string characters
let txt34 = "HELLO WORLD";
let char = txt34.charAt(0);
console.log(char);

var str27 = "Javatpoint";
console.log(str27.charAt(4));

console.log(str27.charAt());                 //print first character  

console.log(str27.charAt(str27.length - 1));

var str28 = new String("This is string");
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));

let txt35 = "HELLO WORLD";
let char1 = txt35.charCodeAt(0);
console.log(char1);
console.log(txt35[0]);

var str29 = new String("This is string");
console.log(str29.charCodeAt(0));
console.log(str29.charCodeAt(1));
console.log(str29.charCodeAt(2));
console.log(str29.charCodeAt(3));
console.log(str29.charCodeAt(4));
console.log(str29.charCodeAt(5));

var s3 = "Javatpoint";
console.log(s3.charCodeAt(3));
console.log(s3.charCodeAt());
console.log(s3.charCodeAt(x.length - 1));
console.log(s3.charCodeAt(12));
txt35.split(",")    // Split on commas
txt35.split(" ")    // Split on spaces
txt35.split("|")    // Split on pipe

//string searching 
let str30 = "Please locate where 'locate' occurs!";
console.log(str30.indexOf("locate"));
console.log(str30.lastIndexOf("locate"));
console.log(str30.lastIndexOf("John"));
console.log(str30.indexOf("locate", 15));
console.log(str30.lastIndexOf("locate", 15));
console.log(str30.search("locate"));

var web = "Learn JavaScript on Javatpoint";
console.log((web.indexOf('a')));
console.log(web.indexOf('a', 3));
console.log(web.indexOf("Java"));
console.log(web.indexOf("Java", 7));
console.log(web.indexOf("java"));
console.log(web.lastIndexOf('a'));
console.log(web.lastIndexOf("Java"));
console.log(web.lastIndexOf("Java", 19));
console.log(web.lastIndexOf("java"));

var str31 = "JavaScript is a scripting language. Scripting languages are often interpreted";
console.log(str31.search("scripting"));
console.log(str31.search(/Scripting/));
console.log(str31.search(/Javatpoint/));

let txt36 = "The rain in SPAIN stays mainly in the plain";
console.log(txt36.match(/ain/g));
console.log(txt36.match(/ain/gi));
console.log(txt36.includes("rain"));
console.log(txt36.includes("world", 12));

var str32 = "Javatpoint";
console.log(str32.match("Java"));
console.log(str32.match(/java/g));
console.log(str32.match(/java/gi));
console.log(str32.match(/[a-p]/));              //return the first match  

let txt37 = "Hello world, welcome to the universe.";

console.log(txt37.startsWith("Hello"));
console.log(txt37.startsWith("world"));       // Returns false
console.log(txt37.startsWith("world", 5));    // Returns false
console.log(txt37.startsWith("world", 6));    //return true

let txt38 = "John Doe";
console.log(txt38.endsWith("Doe"));

//creating an array
const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";
console.log(cars1);

const cars2 = new Array("Saab", "Volvo", "BMW"); //using new 

//accessing elements
const cars3 = ["Saab", "Volvo", "BMW"];
let car2 = cars3[0];
console.log(car2);
cars3[0] = "Opel";                    //changing the element
console.log(cars3);

console.log(cars3.length) ;  // Returns the number of elements
console.log(cars3.sort());   // Sorts the array

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
console.log(fruits);

fruits[fruits.length] = "jjj";  // Adds  to fruits
console.log(fruits);

let type = typeof fruits;
console.log(type);

console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);
// Create an array with one element:
const points = [40];
console.log(points);

  //pop method in array
  const fruits1 =["apple","orange","mango"];
  fruits1.pop("mango");
  console.log(fruits1);
  //array shift
  const fruits2 =["apple","mango","pear"]
  fruits2.shift();
  console.log(fruits2);
  
  
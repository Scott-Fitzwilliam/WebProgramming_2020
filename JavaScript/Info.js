//Three variables, var let and const
// let is changable after the fact, but const is a constant

console.log("Hello world");
const name = "Scott";
const age = 23;
const s = "Technology, JavaScript, IT, Code, Learning, One step at a time.";

//Concatenation
//Old way, normal C# way
console.log("My name is " + name + " and I am " + age);

// Template String - uses ` backticks instead of quotes
//to allow for contained variables the use of ${} is the container
console.log(`My name is ${name} and I am ${age} years old.`)

//Method is a fucntion that is accosiated with an object.
//Always has parentheses

//Splitter function: Lets you split a string based on a set condition
//This can be a , or a space, or a combination

console.log(s.split(", "))
//You can see in live server that sentence at the end of const s
// is still one index in the array, since a new index requires
// ", " not just a space.

//Arrays - Variables that hold multiple values
const numbers = new Array(1,2,3,4,5);

console.log(numbers);

//Array in JS arn't type bound like C#, it can have numbers, strings and more in the same array. 
const array1 = ["apple", "oranges", "pears", 10, true];
const fruits = ["apple", "oranges", "pears"];
//arrays can be dynamicly increased outside of the array, also arrays are 0 based
//fruits has 3 elements so the indexes ar 0,1,2 index 3 will make a fourth element: "grapes"
fruits[3] = "grapes";
//.push simply pushes a vaule onto the end of the array, whatever value it may be.
//.unshift does the same back at the beginning rather then the end so index = 0
fruits.push("mangos");
fruits.unshift("strawberries");
//Removes last element from an array - Removes mangos
fruits.pop();
//Everything is case sensitive btw
console.log(fruits.indexOf("oranges"));

console.log(fruits);


//Object Literals



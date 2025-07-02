// Variables and Data Types
let Name = "\"Tamara Tumeh\"";
console.log(Name, typeof Name);
var age;
age = 100 % 79;
console.log(age, typeof 21);
const student = 1 == 1;
console.log(Boolean(student), typeof student);
let GPA = 85.3;
console.log(GPA, typeof NaN);
//Extra Code I Added
console.log("My job is:" + job);
var job = 'Nothing';
console.log(String('name') + ': ' + 'Tamara Tumeh' + ' | ' + String('age') + ': ' + (true + 1) + '1' + ' | ' + String('student') + ': ' + confirm('true') + ' | ' + String('GPA') + ': ' + 85.3)

////////////////////////////
// User Name
var username;
username = prompt('Write your name:');
alert('Hi, your ' + String('name') + ' is :' + `${username}`);
////////////////////////////
console.log('5' + 1);
// 51 
// Because "5" is a string, and when the + operator is used with a string, it converts the number 1 to a string too and performs string concatenation.
console.log('5' - 1);
// 4
// The sign - doesn't work with text so you force the string "5" to turn it into a number.
console.log(true + 1);
// 2
// The value of true is 1 and the value of false is 0. true is converted to 1 in mathematical operations, and the operation is completed normally.
console.log(false + 'false');
// falsefalse
// string + string = falsefalse
console.log(null + 1);
// 1
// null is empty and is represented by 0 and 0 + 1 = 1
////////////////////////////
// Age Calculator
let birthyear = Number(prompt('Enter your birth year?'));
let currentyear = 2025;
let Age = currentyear - birthyear;
alert(String('Your age is') + ': ' + Age);
////////////////////////////
// Basic Calculator
let Number1, Number2, sum, difference, product, division, remainder;
Number1 = Number(prompt('Enter the first number:'));
Number2 = Number(prompt('Enter the second number:'));
sum = Number1 + Number2;
difference = Number1 - Number2;
product = Number1 * Number2;
division = Number1 / Number2;
remainder = Number1 % Number2;
alert("The Sum is: " + sum + "\n" +
    "The Difference is: " + difference + "\n" +
    "The Product is: " + product + "\n" +
    "The Division is: " + division + "\n" +
    "The Remainder is: " + remainder);
////////////////////////////    

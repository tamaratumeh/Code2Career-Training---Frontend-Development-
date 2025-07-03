// #Q1
let Name = prompt("enter your name:");
if (Name == "" || Name == " " || Name == null) {
    Name = "guest";
}
alert("this is your name:" + Name);
///////////////////////////////////////////////////
// #Q2
let number = prompt("enter a number");
if (number == "" || number == null) {
    alert("please enter the number")
}
else if (Number(number) % 2 == 0) {
    alert("this is even number");
} else {
    alert("this is odd number");
}
///////////////////////////////////////////////////
// #Q3
let guessnumber;
let secretnumber = 21;
alert("you have just 3 attempts to guess the secret number");
for (let i = 1; i <= 3; i++) {
  let validnumber = prompt("this is attempt number" + " " + i);
  if (validnumber  == "" || validnumber  == null) {
    alert("please enter the number");
    i--;
    continue;
  }
  guessnumber = Number(validnumber );
  if (guessnumber == secretnumber) {
    alert("correct guess");
    break;
  } else {
    alert(guessnumber > secretnumber ? "it's too high" : "it's too low");
  }
}
///////////////////////////////////////////////////
// #Q4
const username = prompt("enter your username:");
const password = Number(prompt("enter your password:"));
if (username == "admin" && password == 1234) {
    alert("welcome");
} else {
    alert("access denied");
}
///////////////////////////////////////////////////
// #Q5
let count = 0;
const Firstquestions = prompt("what is my name:");
if (Firstquestions == "Tamara" || Firstquestions == "Tamara Tumeh" || Firstquestions == "Tamara Kldoun Tumeh") {
    count++;
}
let Secondquestions = prompt("what is my age?");
if (Secondquestions !== "" && Secondquestions !== null && Number(Secondquestions) == 21) {
    count++;
}
const Lastquestions = prompt("are you a student? yes or no");
if (Lastquestions === "yes") {
    count++;
}
alert("final result:" + " " + count + " " + "right answers from 3 questions");
///////////////////////////////////////////////////
// #Q6
let FNumber = Number(prompt("enter the first number:"));
let operator = prompt("choose the type of operation (+, -, *, /):");
let SNumber = Number(prompt("enter the second number:"));
let validateinput = true;

if (isNaN(FNumber) || isNaN(SNumber)) {
    alert("this is not a number");
    validateinput = false;
}
if (operator == "/" && SNumber == 0) {
    alert("divide by zero is not allowed");
    validateinput = false;
}
if (validateinput) {
    let result = 0;
    switch (operator) {
        case "+":
            result = FNumber + SNumber;
            alert("the result:" + " " + result);
            break;
        case "-":
            result = FNumber - SNumber;
            alert("the result:" + " " + result);
            break;
        case "*":
            result = FNumber * SNumber;
            alert("the result:" + " " + result);
            break;
        case "/":
            result = FNumber / SNumber;
            alert("the result:" + " " + result);
            break;
        default:
            alert("error");
    }
}
///////////////////////////////////////////////////
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  }
}
///////////////////////////////////////////////////

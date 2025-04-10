//1
let num = 10;
let numFloat =2.2;
let anotherNumber = 2
let addition = num + anotherNumber;
let subtraction = num - anotherNumber;
let multiplication = num * anotherNumber;
let division = num / anotherNumber;
let modulus = num % anotherNumber;
let exponentiation = Math.pow(num,anotherNumber);
console.log(`Number: ${num}, another number: ${anotherNumber}`);
console.log("Addition:",addition);
console.log("Subtraction:",subtraction);
console.log("Multiplication:",multiplication);
console.log("Division:",division);
console.log("Modulus:",modulus);
console.log("Exponentiation:",exponentiation);
//2
//2.1
let num1GreaterNum2 = 10 > 5 ? true : false;
let num1LesserNum2 = 10 < 5 ? true : false;
//2.2
let x = 8;
let y = 12;
console.log(`x = ${x},  y = ${y}`)
x > y && console.log("x is greater than y");
x <= y && console.log("x is less than or equal to y");
x == y && console.log("x is equal to y");
x != y && console.log("x is not equal to y");
//3
let a = true;
let b = false;
a && b ? console.log("a AND b") : "";
a || b ? console.log("a OR b") : "";
!a ? console.log("NOT a") : "";
//4
let p = 10;
let anyNumber = 3;
console.log(`p: ${p}, another number: ${anyNumber}`);
console.log("+=", p+=anyNumber);
console.log("-=", p-=anyNumber);
console.log("*=", p*=anyNumber);
console.log("/=", p/=anyNumber);
console.log("%=", p%=anyNumber);
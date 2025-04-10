//1
//1.1
let temperature = 78;

if(temperature < 0)
    console.log("It's freezing!");
else if(temperature >= 0 && temperature <= 15)
    console.log("It's cold.");
else if(temperature >= 16 && temperature <= 25)
    console.log("It's mild.");
else
    console.log("It's warm.");
//1.2
switch (true) {
    case temperature < 0:
        console.log("It's freezing!");
        break;
    case temperature >= 0 && temperature <= 15:
        console.log("It's cold.");
        break;
    case temperature >= 16 && temperature <= 25:
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");

}
//2
//2.1
let number = 30;
if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}
//2.2
switch (true) {
  case (number % 2 === 0 && number % 3 === 0):
    console.log("Divisible by both.");
    break;
  case (number % 2 === 0):
    console.log("Divisible by 2.");
    break;
  case (number % 3 === 0):
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}
//3
//3.1
console.log("numbers from 1 to 10");
for(let i = 1; i<=10;i++){
    console.log(i);
}
//3.2
console.log("even numbers between 1 and 20");
for(let i = 1; i<=20;i++){
    if(i%2===0){
        console.log(i);
    }
}
//3.3
sum = 0;
for(let i = 1; i<=10;i++){
    sum += i;
}
console.log("sum of all numbers from 1 to 100:", sum);
//3.4
let numbers = [1, 2, 3, 4, 5];
console.log("the array of numbers")
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
numbers = [3,7, 2, 5, 10, 6];
let largeNumber = 0;
for(let i = 0; i < numbers.length; i++){
    largeNumber = largeNumber > numbers[i] ? largeNumber : numbers[i];
}
console.log("the largest number:",largeNumber)
//4
//4.1
let index = 1;
console.log("numbers from 1 to 10.")
while(index <= 10){
    console.log(index);
    index++;
}
console.log("all even numbers between 1 and 20.")
index = 1;
while(index <= 20){
    if(index%2===0){
        console.log(index);
    }
    index++;
}
//3.3
index = 1;
sum = 0;
while (index <= 100) {
  sum += index;
  index++;
}
console.log("sum of all numbers from 1 to 100:", sum);
//3.4
console.log("all multiples of 5 less than 50.");
index = 5;
while (index < 50) {
  console.log(index);
  index += 5;
}
//5
//5.1
index = 1;

console.log("numbers from 1 to 10.");
do {
  console.log(index);
  index++;
} while (index <= 10);

//5.2
index = 1;
sum = 0;

do {
  sum += index;
  index++;
} while (index <= 100);
console.log("sum of all numbers from 1 to 100", sum);
//5.3
do {
  number = parseInt(prompt("Enter a number greater than 10:"));
} while (isNaN(number) || number <= 10);
console.log("You entered a valid number:", number);
//5.4
//User is prompted to enter a number from the terminal
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== correctNumber);

console.log("Correct! You guessed the number:", correctNumber);
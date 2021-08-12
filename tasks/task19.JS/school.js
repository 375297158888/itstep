var sideSquare = 8;
var perimetrOfSquare = sideSquare * 4;
console.log(perimetrOfSquare);

var circle = 8, PerimeterOfACircle;
PerimeterOfACircle = Math.PI * (circle ** 2);
console.log (PerimeterOfACircle);

var a  = 3, b = 4, c;
c = (a ** 2 + b ** 2) ** 0.5;
console.log(c);

var d = 4, e = 5, f;
f = d;
d = e;
e = f;
console.log(d, e);



var number = 123, firstNumber, secondNumber, thirdNumber, sumNumber, reversNumber = "";
thirdNumber = number % 10;
firstNumber = Math.floor (number / 100);
secondNumber = Math.floor (number / 10);
secondNumber = secondNumber % 10;
sumNumber = firstNumber + secondNumber + thirdNumber;
console.log (sumNumber);

reversNumber = reversNumber + thirdNumber + secondNumber + firstNumber;
console.log (reversNumber);

var credit = 1000;
credit = credit + (credit * 0.1);
credit = credit + (credit * 0.1);
credit = credit + (credit * 0.1);
credit = credit - 1000;
console.log(credit);

var min = 1, max = 100, randomNumber;
randomNumber = min + Math.random() * (max - min + 1);
randomNumber = Math.floor (randomNumber / 1); 
console.log(randomNumber);
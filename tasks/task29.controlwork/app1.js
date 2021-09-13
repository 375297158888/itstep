let value = 1, n = 10;
let b = Array(n).fill(value, 0, n);

console.log(b); // #1

let a = [];
 value = 8, n = 10;
a.length = n;
b = a.fill(value, 0, n)

console.log(b); // #1

a = [-8, 3, 3, -5, -1];
let sum = a.reduce((a, v) => v > 0 ? a +v : a, 0);
console.log(sum);

let str = "я знаю javascript";
str = str.split("");
str = str.join("");
str = '';
console.log(str);
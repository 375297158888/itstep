let str = "js";
console.log(str.toUpperCase()); //#1

str = "JS";
console.log(str.toLowerCase()); // #2

str = "я учу javascript!";
console.log(str.length); // #3

console.log(str.substr(6,11)); // #4
console.log(str.substring(6,17)); // #4
console.log(str.slice(6)); // #4

console.log(str.indexOf("учу")); // #5

let n = 19, longstr = "Дана переменная str, в которой хранится какой-либо текст Реализуйте обрезание длинного текста по следующему принципу если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str";

if (longstr.length>n) {
    result = longstr.substr(0,n) + "..."; 
} else result = longstr;

console.log(result); // #6

str = "я-учу-javascript!";
console.log() // #7

str = "я учу javascript!";
    let arr =str.split(" ");
console.log (arr); // #8
console.log (str.split('')); // #9

let date = "2025-12-31";
let new_date = date.split("-").reverse().join(".");
console.log(new_date); // #10

str = ['я', 'учу', 'javascript', '!'];
console.log(str.join("+")); // #11

str = "я учу javascript!";
let arrr = str.split(" ");
arrr [0] = arrr[0].toUpperCase();
str = '';
str = arrr.join(' ');
console.log(str);  // #12
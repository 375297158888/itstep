let value = 1, n = 10;
let b = Array(n).fill(value, 0, n);

console.log(b); // #1

let a = [];
 value = 8, n = 10;
a.length = n;
b = a.fill(value, 0, n)

console.log(b); // #1

let c = [-8, 3, 3, -5, -1];
let sum = c.reduce((c, v) => v > 0 ? c +v : c, 0);
console.log(sum); // #2

let str = "я знаю javascript";
let arr = str.split(" ");
console.log(arr.length); // #3

console.log(arr.pop()) // #4

let d = [8, 5, 8], e = [8, 7, 5];
function compare(a, d){
    if(a > d) return -1;
    if (a == d) return 0;
    if (a < d) return 1;
}
 a = a.concat(d, e);
 a = a.sort(compare);
 console.log(a); // #5

 a = [1, 2, 3], b = [3, 4, 5];
 let result = a.every(function(item,index,array){
     return item == b[index];
 })
console.log(result); // #6

let count = 0;
a.forEach(function(item,index, array){
    if(item == b[index])
    count++;
});
console.log(count); // #6

c = a.filter(function(item,index, array){
    return item == b[index];
});
console.log(c); // #6

d = [1,3,6,4,3,3,5,6];

let uniqueD = d.filter(function(item,index,array){
    return index == array.indexOf[item];
})

uniqueD = []
d.forEach(function(item,index,array){
    if(uniqueD.includes(item) == false)
    uniqueD.push(item);
})
console.log(uniqueD) // #7
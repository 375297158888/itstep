let a = [1, 2, 3], b = [4, 5, 6], c = []; 
    c = c.concat(a, b);
    console.log(c); // #1

a.reverse();
console.log(a); // #2

a = [1, 2, 3]
a.push(4, 5, 6);
console.log(a);  // #3

a = [1, 2, 3]
a.unshift(4, 5, 6);
console.log(a); // #4

a = [7, 9, 3]
console.log(a.shift()); // #5
console.log(a.pop()); // #6

a = [1, 2, 3, 4, 5]
console.log(a.slice (0, 3)); // #7
console.log(a.slice(3, 5)); // #8

a = [1, 2, 3, 4, 5]
console.log(a.splice(1, 4, 4, 5)); // #9
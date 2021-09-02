function randomNumber (max,min) {

    a = Math.floor (Math.random() * (max - min + 1)) + min;
 
    return a;
}
a = randomNumber(1,1000);
console.log(a); // #1

function fillArray (b,n) {
    let max = 100; min = 1;

for (let i = 0; i < n; i++) {

    b[i] = Math.floor (Math.random() * (max - min + 1)) + min;
}
    return b;
}
let b = [];
b = fillArray (b,10);
console.log(b); // #2

function maxNumber (b) {
    let c = b[0];

    for (let i = 0; i < b.length; i++)
    {
        if  (c < b[i])
        c = b[i];
    }
    return c;
}
c = maxNumber(b);
console.log(c); // #3

function maxIndex (b) {
    
    for (let i = 0; i < b.length; i++){
        if (maxNumber(b) == b[i]) {
            maxInd = 1
        }
    }
    return maxInd;
}
console.log("Индекс максимального элемента "maxIndex (b)" ");
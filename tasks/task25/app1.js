function fillArray (a,n) {
    let max = 100; min = 1;

for (let i = 0; i < n; i++) {

    a[i] = Math.floor (Math.random() * (max - min + 1)) + min;
}
return a;
}

let a = [];
a = fillArray (a,10);
console.log (a);

function summArray(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++){
        sum += a[i];
    }
return sum;
}

let c = summArray(a);
console.log(c);
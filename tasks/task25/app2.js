function fillArray (a,n) {
    let max = 100; min = 1;

for (let i = 0; i < n; i++) {

    a[i] = Math.floor (Math.random() * (max - min + 1)) + min;
}
return a;
}
function getEven(a) {
    for (let i = 0; i < a.length; i++){
        if (a[i] % 2 == 0) {
            a[i] *= 2;
        }
    }
    return a;
}

function getDelete(a,k) {
    for (let i = 0; i < a.length; i++){
        if (i >= k-1) {
            a[i] = a[i+1];
        }
    }
    return a;
}


let a = [];
a = fillArray (a,10);
console.log(a);

a = getEven(a);
console.log(a);

a = getDelete(a,1);
console.log(a);
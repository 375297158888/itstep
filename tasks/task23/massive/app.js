let a = [], min = 1, max = 100, count = 0, n = 10;

for (let i = 0; i < n; i++) {
    a [i] = Math.floor(Math.random() * (max - min + 1)) + 1;
    if (a[i] % 2 == 0) {
        count++
    }
}
console.log(a, count);

let x = [], y = 0;

for (let i = 0; i < n; i++) {
    x [i] = Math.floor(Math.random() * (max - min + 1)) + 1;
    if (x[i] > y) {
        y = x[i]
    }  
}
console.log(x, y);

let w = [], z = 0, average = 0;

for (let i = 0; i < n; i++) {
    w [i] = Math.floor(Math.random() * (max - min + 1)) + 1;
    z = (z + w[i]);        
    } 
average = z / n; 

console.log( w, z, average);

let sum = 0;

for (let i = 0; i < n; i++) {
    sum += w[i];        
    } 

console.log(sum/n);

let p = [], m = [];
for (let i = 0; i < n; i++) {
    p [i] = Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < n; i++) {
    m[i] = p[n - 1] - 1;
}
console.log(m,p);

let reverse = [];
for (let k = 0, i = n-1; k < n; k++, i--){
    reverse[k]  = w[i];
}
console.log(d,reverse);
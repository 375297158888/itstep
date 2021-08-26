let a = [], n = 10, max = 100, min = 1;

for (let i = 0, k = 5; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    if (i >= k) {
        console.log(a[i]);
    }
}
console.log (a);

for (let i = 0, k = 4; i < n; i++) {
    if (a[i] % k == 0) {
        console.log ("кратное числу k: " +a[i]+"");
    }
}
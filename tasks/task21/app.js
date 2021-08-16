let i = 0, sum = 0;
while (i <= 100){
    sum += i;
    i += 2;
}
console.log (sum)

let n = 1000000, j = 0;
for (; n != 1; j++){
    if (n % 2 ==0) {
        n = n / 2;
    } else {
        n = (n * 3 + 1) / 2;
    }
}
console.log(j)

let y = 1, p = 0;
while (y != 51){
    {p++;
        if (5 % 7 == 0 && p % 5 != 0){
        y++;
        }
    }
    
}
console.log (p)

let z = 100, count = 0;
while (count !=11) {
    z++;
    if(z % 21 != 0 || z % 14 != 0){
        count++;
    }
}
console.log(count)
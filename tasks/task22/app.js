let squareArea = 11, perimetrOfSquare;
perimetrOfSquare = squareArea * 2;
console.log(perimetrOfSquare);


let a = 10, b = 10, c = 10;

if (a == b && b == c && c == a)
    console.log ("Треугольник равносторонний");
    
else if (a == b && b != c || b == c && c != a || c == a && a != b)
    console.log ("Треугольник равнобедренный");

else console.log ("Треугольник разносторонний");


let d = 5, e = 50, f = 5;

if (d + e > f || e + f > d || f + d > e) {
    console.log("Треугольник может существовать");
} else {
    console.log("Треугольник не может существовать");
}


let z = 15, x = 11;

if ((z + x) / 2 % 10 == 0) {
    console.log (z * x);
} else {
    console.log (z + x);
}

let age = 38;

if (age <= 17) {
    console.log ("молодой");
} else if (age >= 18 && age <= 69) {
    console.log ("взрослый");
}
else 
    console.log ("пожилой");

let n = 10;

if (n != 21) {
    console.log(n ** 2);
    n ++;
    }

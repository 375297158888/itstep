    let x = 555;
if (x % 2 == 0) {
    console.log("Even");
} else {
    console.log("Не чётное");
}
    let y = 2231;

if (y % 400 == 0 || y % 4 == 0 && y % 100 !=0){
    console.log("Высокосный")
}
else {
    console.log("Не высокосный")
}
    let mushrooms = 13151565161;

if (mushrooms % 100 > 10  && mushrooms % 100 < 20 || 
    mushrooms % 10 > 4 && mushrooms % 10 < 10 ||
    mushrooms % 10 == 0) 
    console.log(mushrooms + " грибов");
else if (mushrooms % 10 == 1)
    console.log(""+mushrooms+" гриб");
else 
    console.log (mushrooms + " гриба");

    let day = "1";
    let hour = "7"; 

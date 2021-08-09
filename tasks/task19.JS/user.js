var firstName = "Вася";
const lastName = "Пупкин";
var hight = null, weight = null;
hight = 180;
weight = 0.89;
var weightKG = weight * 100;
console.log ("Меня зовут "+firstName+" "+lastName+". Я вешу "+weight+" ц. Мой рост - "+hight+" см.");
weight = 0.9;
hight = 178;
console.log (""+firstName+" "+lastName+" потолстел и стоптался.");
firstName = "Петя";
weight *= 2;
console.log ("Теперь я "+firstName+" "+lastName+" и вешу во "+weight / 0.89+" раз больше, чем в молодости")
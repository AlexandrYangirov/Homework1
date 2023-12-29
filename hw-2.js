//Задание 1
let meaning = 10
//age = promt(a)
alert(meaning);
let twenty = 20
alert(twenty);

//Задание 2
const iphonereliaseyear = "год выпуска первого iPhone 2007"
alert(iphonereliaseyear);
//Задание 3
const jsCreator = "создатель языка JavaScript Брендан Эйх"
alert(jsCreator);
//Задание 4
let a = 10;
let b = 2;
let sum = a + b;
alert("Сумма чисел: " + sum);

let diff = a - b;
alert("Разность чисел: " + diff);

let product = a * b;
alert("Произведение чисел: " + product);

//Задание 5
let quotient = a / b;
alert("Частное чисел: " + quotient);

result = 2 ** 5

alert(result)

//Задание 6
a = 9;
b = 2;

let remainder = a % b;
alert("Остаток от деления a на b: " + remainder);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9
const user = {
    name: "Alexandr",
    age: 33,
    isadmin: true
};

//Задание 9.1
//способ 1
javascript
user.cityOfResidence = "Moscow";
//способ 2
javascript
user["city of residence"] = "Moscow";

//Задание 9.2
user.age = 25;

//Задание 9.3
delete user.city_of_residence;

//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info])

//Задание 10
let userName = prompt("Как вас зовут?");
alert(`Привет,$(userName)!`);
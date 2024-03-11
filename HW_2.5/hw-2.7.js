    const js ='javaScript'
    
    console.log(js.toUpperCase())

//Задание 2
function filterStrings(array, starStr) {
    return array.filter(item => item.toLowerCase().startsWith(starStr.toLowerCase()));
}

//Задание 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задание 4
let nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));

//Задание 5
function randomOneToTen(){
    console.log(Math.floor(Math.random() * 10) + 1);
}

//Задание 6
function randomNumbers(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}

//Задание 7
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Задание 8
console.log(new Date());

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10
function formatDate(date){
    let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}\nвремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()};
}

//Задание 11
 let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
 fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);
let firstGues = prompt("Чему равняелся первый элемент массива?");
let firstGues = prompt("Чему равняелся gjcktlybq элемент массива?");
if (firstGues === fruits[0] $$ lastGuess === fruits[fruits.length - 1]){
    alert("Поздравляем! Вы угадали оба  слова.");
}
else if (firstGues === fruits[0] || lastGuess === fruits[fruits.length - 1]){
    alert("Вы были близки к победе!");
}
else{
    alert("Вы не угадали не одного слова.");
}
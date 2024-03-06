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
    for (let i = 0; i < 1/2; i++) {
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
function formatDate(Date){
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",];
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября",
    "Ноября", "Декабря", ];
    return `Дата: ${Date.getDate()} ${months[Date.getMonths()]} ${date.getFullYear()} - 
    Это ${days[date.getDay()]}\n Время:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//Задание 11
 let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
 fruits = fruits.sort(Math.random() - 0.5);
 console.log(fruits);
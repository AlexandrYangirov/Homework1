//задание 1
for (let i = 0; i < 2; i++){
    console.log("Привет");
}

//задание 2
for (let i = 1; i<=5; i++){
    console.log(i);
}

//задание 3
for (let i = 7; i <= 22; i++){
    console.log(i);
}

//задание 4
let obj = {
"Коля": "200",
"Вася": "300",
"Петя": "400"
};
for (let key in obj){
    console.log( '${key} - зарплата ${obj[key]} долларов.');
}

//задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num ++;
}
console.log(n);
console.log(num);

//задание 6
let firsFriday = 1;
for (let i = firsFriday; i <= 31; i += 7) {
    console.log('Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.');
}
let firsfriday = 1;
for (let i = firsfriday; i <= 31; i += 7) {
    console.log('сегодня пятница, ' + i + '-е число. необходимо подготовить отчет.');
}
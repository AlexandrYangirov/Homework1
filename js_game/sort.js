const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

function isPositive(num) {
    return num > 0;
}

// Функция для проверки мужского пола
function isMale(person) {
    return person.gender === 'male';
}

// Собственная реализация метода filter
function filter(array, ruleFunction) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    
    return result;
}

// Тест с числами
console.log(filter([3, -4, 1, 9], isPositive));
// Ожидаемый результат: [3, 1, 9]

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

// Тест с объектами
console.log(filter(people, isMale));

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
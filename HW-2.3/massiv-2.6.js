//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

//Задание 2
const arr = [1, 5, 4, 10, 0, 3];
const index = arr.indexOf(4);
console.log(index);

//Задание 3
const arr = [1, 3, 5, 10, 20];
const str = arr.join(' ');
console.log(str);

//Задание 4
let arr =[];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for (let j = 0; j < 3; j++) {
        innerArr.push(1);
        
    }
    arr.push(innerArr);
}
console.log(arr);

//Задание 5
const arr = [1,1,1];
arr.push(2,2,2);
console.log(arr);

//Задание 6
let arr = [9, 8, 7, 'a', 6, 5];
arr.sort((a , b) => a - b).pop();
console.log(arr);

//Задание 7
let arr = [9, 8, 7, 6, 5];
const quess = Number(prompt("Угадай число:"),10);
if(arr.includes(quess)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

//Задание 8

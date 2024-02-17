function changeNum(x, y) {
return x > y ? y : x
    
}
changeNum(5, 6)
console.log(changeNum(5, 6))

//Задание 2
function oddOrEven(x) {
    return x % 2 === 0 ? 'Число четное' : 'Число нечетное'
    
}
console.log(oddOrEven(5))

//Задание 3
function printSquare(num) {
  const square = num * num;
  console.log(square);
}
printSquare(5); 

function square(number) {
    return number * number;
  }
  console.log(square(3)); 
  console.log(square(5));

  //Задание 4
  function greetUser(){
    const age = Number(prompt('Возраст'));
  if (age < 0){
  console.log('Вы ввели неправильное значение');  
  }
  else  if (age > 0 && age <=12) {
   console.log('Привет, друг')
  }
  else {
    console.log('Добро пожаловать!')
  }
  }
  greetUser()

  //Задание 5
  function multiplyNumbers(a, b){
    if(isNaN(a) || isNaN(b)) {
        return
    } else{
        return a * b;
    }
  }

  //Задание 6
  function cubenumber(){
    let num = prompt("Введите число:");
    num = Number(num);
    if (isNaN(num)){
        console.log("Вы ввели некорректное число");
        return;
    } else {
        console.log(num);
        console.log(num ** 3);
        return num ** 3;
    }
}

cubenumber();
 
  //Задание  7
  const Math = require('math');

  function getArea() {
      return Math.pi * this.radius * this.radius;
  }
  
  function getPerimeter() {
      return 2 * Math.pi * this.radius;
  }
  
  const circle1 = {
      radius: 5,
      getArea,
      getPerimeter,
  };
  
  const circle2 = {
      radius: 10,
      getArea,
      getPerimeter,
  };
  
  console.log(circle1.getArea());      // Выводит площадь круга с радиусом 5
  console.log(circle1.getPerimeter()); // Выводит периметр круга с радиусом 5
  
  console.log(circle2.getArea());      // Выводит площадь круга с радиусом 10
  console.log(circle2.getPerimeter()); // Выводит периметр круга с радиусом 10
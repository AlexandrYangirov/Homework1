function СhangeNum(x, y) {
return x > y ? y : x
    
}
СhangeNum(5, 6)
console.log(СhangeNum(5, 6))

//Задание 2
function oddOrEven(x) {
    return x % 2 === 0 ? 'Число четное' : 'Число нечетное'
    
}
console.log(oddOrEven(5))

//Задание 3
function printSquare(num) {
  var square = num * num;
  console.log(square);
}
printSquare(5); 

function square(number) {
    return number * number;
  }
  console.log(square(3)); 
  console.log(square(5));

  //Задание 4
  function hoWold(){
    const age = Number(prompt('Возраст'))
  if (age < 0) {
    alert('Вы ввели неправильное значение')
    
  }
  if (age > 0 && age <=12) {
    alert('Привет, друг')
  }
  if (age >=13) {
    alert('Добро пожаловать!')
  }
  }
  hoWold()

  //Задание 5
  function MultiplyNumbers(a, b){
    if(isMaN(a) || isMaN(b)) {
        return
    } else{
        return a * b;
    }
  }

  //Задание 6
  function cubeNumber(){
    let num =  prompt("Введите число:");
    num = Number(num);
    if (isNaN(num)){
        return
    } else {
        return ${num}
        ${num ** 3 };
    }
  }
  console.log(cubeNumber());

  //Задание  7
  function getArea() {
    return Math.PI * this.radius * this.radius;
    
  }
  function getPerimetr() {
    return 2 * Math.PI * this.radius;
    
  }

  const circle1 ={
    radius: 5,
    getArea,
    getPerimetr,
  };
  const circle2 ={
    radius: 10,
    getArea,
    getPerimetr,
  };
  console.log()
function turn_the_text_over() {
    let userInsert;
    do {
        userInsert = prompt("Введите ваше слово!");
        if (userInsert === '') {
            alert("Вы ничего не ввели!");

        } else if (!isNaN(userInsert)) {
            alert("Вы ввели не слово введите, пожалуйста, слово");


        } else {
            alert(userInsert.toUpperCase().split('').reverse().join(''));
        }

    } while (userInsert === '' || !isNaN(userInsert));

function turnOverText() {
    let regexp = /^[a-zA-Z,а-яА-Я]*$/;
    let userEnter;

    do {
        userEnter = prompt("Введите ваше слово!");
        if (regexp.test(userEnter)) {
            alert(userEnter.toUpperCase().split('').reverse().join(''));
        } else {
            alert("Вы ввели не слово введите, пожалуйста, слово");
        }
    } while (regexp.test(userEnter) === false);

}

}















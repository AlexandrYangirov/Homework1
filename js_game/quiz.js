function simpleQuizGame() {
    let userAnswer;
    let startMessage;
    let pointCounter = 0;
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    do {
        startMessage = confirm("Хотите поиграть в простую викторину?");
        
        if (startMessage === true) {
            pointCounter = 0;
            
            for (let i = 0; i < quiz.length; i++) {
                // Повторяем вопрос, пока не получим правильный ответ
                while (true) {
                    userAnswer = Number(prompt(`Ответьте на вопрос: ${quiz[i].question}\n\nВарианты ответа:\n${quiz[i].options.join('\n')}\n\n(введите номер ответа)`));
                    
                    if (userAnswer === quiz[i].correctAnswer) {
                        alert("✅ Правильно!");
                        pointCounter++;
                        break; // Выходим из цикла while
                    } else {
                        alert("❌ Неправильно! Попробуйте еще раз.");
                    }
                }
            }
            
            alert(`🎉 Игра завершена!\nВы набрали: ${pointCounter} балл(а) из ${quiz.length} возможных.`);
        } else {
            alert("👋 До свидания!");
            break;
        }
    } while (true);
}


simpleQuizGame();
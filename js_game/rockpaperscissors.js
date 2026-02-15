function RockpAperScissor() {
    console.log("ok");

    const choices = ["камень", "ножницы", "бумага"];
    let playAgain = true;
    
    alert("🎮 Добро пожаловать в игру 'Камень, ножницы, бумага'!");
    
    while (playAgain) {
        let userChoice = prompt("Выберите: камень, ножницы или бумага");
        
        if (userChoice === null) {
            if (confirm("Хотите выйти из игры?")) {
                alert("👋 До свидания!");
                return;
            }
            continue;
        }
        
        userChoice = userChoice.toLowerCase().trim();
        
        if (userChoice === "") {
            alert("❌ Вы ничего не ввели!");
            continue;
        }
        
        if (!choices.includes(userChoice)) {
            alert("❌ Некорректный ввод! Введите: камень, ножницы или бумага");
            continue;
        }
        
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        let result;
        if (userChoice === computerChoice) {
            result = "Ничья! 🤝";
        } else if (
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")
        ) {
            result = "Вы победили! 🏆";
        } else {
            result = "Компьютер победил! 💻";
        }
        
        alert(`🎮 Результат:\nВаш выбор: ${userChoice}\nКомпьютер: ${computerChoice}\n\n${result}`);
        playAgain = confirm("Хотите сыграть еще?");
    }
    
    alert("👋 Спасибо за игру!");
}
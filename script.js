let button = document.getElementById('button')
let inputField = document.getElementById('inputField')

button.addEventListener('click', function () {
    let text = inputField.value.trim()

    if (text === '') {
        const randomMessage = [
            'Поле пустое! Кнопочке грустно 😭',
            'Эй, ты чего, забыл текст? 🙄',
            'Напиши хоть что-нибудь! Ну плиз 🥺',
            'Пустота в поле = пустота в душе? 😢',
        ];

        let randomIndex = Math.floor(Math.random() * randomMessage.length);
        alert(randomMessage[randomIndex]);
    } else {
        
        button.textContent = text;
        inputField.value = '';
        inputField.focus();
    };

});
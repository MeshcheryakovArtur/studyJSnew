'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function numberRandom() {
    let random = 1;

    function funcRandom() {
        random = Math.floor(1 + Math.random() * 100);
        return random;
    }

    random = funcRandom();
    console.log('Случайное число = ' + random);

    function userControl() {
        let bool;
        let numberUser = prompt('Угадай число от 1 до 100');

        if (numberUser === null) {
            alert('Игра заканчилась');
        } else {
            if (isNumber(numberUser)) {
                if (numberUser > random) {
                    alert('Загаданное число меньше');
                    bool = false;
                }
                else if (numberUser < random) {
                    alert('Загаданное число больше');
                    bool = false;
                } else {
                    alert('Поздравляю, число было угадано!!!');
                }
            } else {
                alert('Введи число!');
                bool = false;
            }

            if (bool === false) {
                userControl();
            }
        }
    }

    userControl();
}

numberRandom();
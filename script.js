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

    function makeCounter() {
        let currentCount = 10;
        return function () {
            currentCount--;
            return currentCount;
        }
    }

    let counter = makeCounter();

    random = funcRandom();
    console.log('Случайное число = ' + random);

    function userControl() {
        let bool;
        let numberUser = prompt('Угадай число от 1 до 100');

        if (numberUser === null) {
            alert('Игра заканчилась');
        } else {
            if (isNumber(numberUser)) {
                if (counter() !== 0) {
                    if (numberUser > random) {
                        alert('Загаданное число меньше, осталось попыток ' + counter());
                        bool = false;
                    }
                    else if (numberUser < random) {
                        alert('Загаданное число больше, осталось попыток ' + counter());
                        bool = false;
                    } else {
                        if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                            numberRandom();
                        } else {
                            alert('Игра заканчилась');
                        }
                    }
                } else {
                    if (confirm('Попытки закончились, хотите сыграть еще?')) {
                        numberRandom();
                    } else {
                        alert('Игра заканчилась');
                    }
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
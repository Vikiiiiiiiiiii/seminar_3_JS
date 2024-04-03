//                Задание 1
// 1. Написать функцию, которой передаем, имя, фамилия и
//      возраст, и получаем строку "Привет Иван Петров с
//      возрастом 17" (только здесь данные, которые были
//      переданы в функцию).

function helloUser(userName, lastName, age){
    alert(`Привет ${userName} ${lastName} с возрастом ${age}`);
}
helloUser('Иван', 'Петров', '17');

// 2. Создайте функцию которая возводит переданное число в
//      квадрат.

function upSquare(number){
    return number * number;
}
console.log(upSquare(5));                  // 25

// 3. Сделайте функцию, которая параметром принимает
//      число и проверяет, положительное это число или
//      отрицательное. В первом случае пусть функция выводит
//      в консоль текст '+++', а во втором '---'.

let checkPositive = (number) => {          // стрелочная функция либо замыкание
    if (number > 0) {
        return true;
    } else {
        return false;
    }
};

let checkPositive2 = function (number) {   // замыкание
    if (number > 0) {
        return true;
    } else {
        return false;
    }
};

// checkPositive и checkPositive2 - это одинаковые функции просто с разным синтаксисом

function checkPositive3 (number) {         // просто функция
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

let checkPositive4 = checkPositive3;      // функциональное выражение, где мы в переменную 
                                          // checkPositive4 присвоили значение функции checkPositive3 , 
                                          // тем самым у нас получилось замыкание checkPositive4
console.log(checkPositive(2));
console.log(checkPositive2(3));
console.log(checkPositive3(-4));
console.log(checkPositive4(5));

//                Задание 2

// 1. Сделайте функцию, которая параметрами принимает 3 числа и
//      выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму
//      значений этих переменных.
//      let param1 = 1;      let a1 = 1;
//      let param2 = 2;      let a2 = 2;
//      let param3 = 3;      let a3 = 3;

function sumGet(num1, num2, num3){
    console.log(num1 + num2 + num3);  
}
let a1 = 1;
let a2 = 2;
let a3 = 3;

sumGet(a1, a2, a3);                       // 6

// 3. Дана функция
//      function func(num = 5) {
//      console.log(num * num);
//      }
//      Расскажите, каким будет результат каждого из вызовов функции.
//      func(2);
//      func(3);
//      func();

              // дефаултный (дефолтный) параметр , т.е. по умолчанию
function func(num = 5) {
    console.log(num * num);
}
func(2);                                  // 4
func(3);                                  // 9
func();                                   // 25


//                Задание 3

// 1. Сделайте функцию, которая параметром принимает число, а
//      возвращает квадратный корень из этого числа. С помощью этой
//      функции найдите корень числа 3, затем найдите корень числа 4.
//      Просуммируйте полученные результаты и выведите их в консоль.

function squareRoot(number) {
    return Math.sqrt(number);   
}
let n1 = squareRoot(3);
let n2 = squareRoot(4);

console.log(n1 + n2);                     // 3.732050807568877

// 2. Создайте функцию, которая находит минимальное число из 2х
//      передаваемых аргументов функции

function minMaxNum(numb1, numb2) {
    if (numb1 < numb2) {
        console.log(numb1);
    } else {
        console.log(numb2);
    }
}

minMaxNum(4, -6);

//                Задание 4
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7,
//      а возвращает день недели на русском языке.

function getDay(numb) {
    switch (numb) {
        case 1:
            console.log('понедельник');
            break;
        case 2:
            console.log('вторник');
            break;
        case 3:
            console.log('среда');
            break;
        case 4:
            console.log('четверг');
            break;
        case 5:
            console.log('пятница');
            break;
        case 6:
            console.log('суббота');
            break;
        case 7:
            console.log('воскресенье');
            break;
        default:
            console.log('день не найден');
            break;
    }
}

getDay(5);
getDay(8);

// 2. Написать функцию, которой передаем имя и она возвращает
//      приветствие в зависимости от времени суток (Доброе
//      утро\день\вечер\ночи Иван)
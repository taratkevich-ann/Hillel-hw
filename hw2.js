/* 1 */
let x = +prompt('Введите число');
if (x < 0){
    console.log('Число меньше нуля')
} else if (x === 0){
    console.log('Число равное нулю')
} else {
    console.log('Число больше нуля')
}

/* 2 */
let myMoney = +prompt('Как много денег у меня есть?');
let friendMoney = +prompt('Как много денег есть у моего друга?');
if (myMoney + friendMoney >= 1000){
  alert('Едем на Майорку!')
} else {
    alert('Идем за пивом')
}

/* 3 */
let age = 21;
if (age >= 20 && age < 27){
    alert('Выслать повестку');
} else{
    alert('Повестку не высылать');
}

/* 4 */
let busNumber = +prompt('Номер маршрутки');
switch (busNumber){
    case 225:
    case 7:
    case 255:
        alert('Это ваша маршрутка');
        break;
    default:
        alert('Не ваша маршрутка');
}

/* 5 */
let weekDay = 'Понедельник';
if (weekDay !== 'Суббота' && weekDay!== 'Воскресенье') alert('Идите на работу');
else alert('У вас выходной');

/* 6 */
let x6 = +prompt('Введите число от -20 до 20');
let y = +prompt('Введите число от -20 до 20');
if (x6 <= 1 && (y >= 3 || y < 0)) {
    alert(x6 + y);
} else {
    alert('Неверно')
}

/* 7 */
if ((x6 > 2 && x6 < 11) || (y >= 6 && y < 14)) {
    alert(x6 * 2);
} else {
    alert(x6 + 5);
}

/* 8 */
let userName = prompt('Write your user name');
if(userName !== '' && userName != null){
    let greeting = `Hello, ${userName}!`;
    alert(greeting);
} else{
    alert('Hello!')
}

/* 9 */
let greeting = '';
let lang = prompt('Write language: en, ru or de');
if (lang === 'en') {
    greeting = 'Hello!';
    alert(greeting);
} else if (lang === 'ru') {
    greeting = 'Привет!';
    alert(greeting);
} else if (lang === 'de') {
    greeting = 'Hallo!';
    alert(greeting);
} else {
    greeting = 'Glad to welcome!';
    alert(greeting);
}

switch (lang) {
    case 'en':
        greeting = 'Hello!';
        alert(greeting);
        break;
    case 'ru':
        greeting = 'Привет!';
        alert(greeting);
        break;
    case 'de':
        greeting = 'Hallo!';
        alert(greeting);
        break;
    default:
        greeting = 'Glad to welcome!';
        alert(greeting);
}

/* 10 */
let date = new Date().getMonth();
switch (date){
    case 0:
    case 1:
    case 11:
        alert("It's winter!");
        break;
    case 2:
    case 3:
    case 4:
        alert("It's spring!");
        break;
    case 5:
    case 6:
    case 7:
        alert("It's summer!");
        break;
    case 8:
    case 9:
    case 10:
        alert("It's autumn!");
        break;
}

/* 11 */
let language = 'en';
let day = 3;
let result;
if (day === 0) {
    if (language === 'ru') {
        result = 'Воскресенье';
        alert(result);
    } else if (language === 'en') {
        result = 'Sunday';
        alert(result)
    }
} else if (day === 1) {
    if (language === 'ru') {
        result = 'Понедельник';
        alert(result);
    } else if (language === 'en') {
        result = 'Monday';
        alert(result)
    }
} else if (day === 2) {
    if (language === 'ru') {
        result = 'Вторник';
        alert(result);
    } else if (language === 'en') {
        result = 'Tuesday';
        alert(result)
    }
} else if (day === 3) {
    if (language === 'ru') {
        result = 'Среда';
        alert(result);
    } else if (language === 'en') {
        result = 'Wednesday';
        alert(result)
    }
} else if (day === 4) {
    if (language === 'ru') {
        result = 'Четверг';
        alert(result);
    } else if (language === 'en') {
        result = 'Thursday';
        alert(result)
    }
}else if (day === 5) {
    if (language === 'ru') {
        result = 'Пятница';
        alert(result);
    } else if (language === 'en') {
        result = 'Friday';
        alert(result)
    }
} else if (day === 6) {
    if (language === 'ru') {
        result = 'Суббота';
        alert(result);
    } else if (language === 'en') {
        result = 'Saturday';
        alert(result)
    }
}

/* 12 */
let newUserName = prompt('Write your name');
let userAge = +prompt('Write your age');
switch(true){
    case newUserName === 'John' && userAge === 29:
    case newUserName === 'Kate' && userAge ===15:
        let greeting = `Hello, ${newUserName} (${userAge})!`;
        alert(greeting);
        break
    default:
        alert('Bye!');
}

(newUserName === 'John' && userAge === 29) || (newUserName === 'Kate' && userAge ===15) ? alert(`Hello, ${newUserName} (${userAge})!`) : alert('Bye!');

/* Циклы */
/* 1 */
let string = '';
for (let i = 0; i < 5; i++){
    string += '_#';
}
console.log(string);

/* 2 */
for (let i = 0; i< 10; i++){
    if(i%2===0){
        let square = i*i;
        console.log(square)
    }
}

/* 3 */
let birthdayPerson = 'Nick';
for (let i = 0; i < 4; i++){
    if(i===2){
        console.log(`Happy Birthday, dear ${birthdayPerson}`);
    } else {
        console.log('Happy Birthday to you');
    }
}

/* 4 */
for(let i=0; ; i++){
    let confirmVar = confirm('Continue?');
    if (confirmVar === true) break;
}

/* 5 */
let num = +prompt('Введите число');
let sum = 0;
for (let i = 0; i <num; i++){
    if(i%2){
        sum = sum + i;
    }
}
console.log(sum);

/* 6 */
for (let i = 0; ; i++){
    let num = Math.random();
    if(num>0.9) break;
    console.log(num, i);
}

/* 7 */
let multTable;
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++){
        multTable = i * j;
        console.log(`${i}x${j} = ${multTable}`);
    }
}

/* 8 */
let fib1 = 0;
let fib2 = 1;
console.log(fib1);
console.log(fib2);
for (let i = 0; i<10; i++){
    let fibSum = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibSum;
    console.log(fibSum);
}

/* 9 */
let newNum;
let newNumSum = 0;
let countNum = 0;
let average = 0;
for (let i = 0; ; i++){
    let newNum = prompt('Write a number');
    if (newNum == null) break;
    countNum = i+1;
    newNumSum += +newNum;
    average = (average + +newNum) / countNum;

}
console.log(countNum, newNumSum, average);

/* 10 */
let password = 'password';
for (let i = 0; ; i++) {
    let userPassword = prompt('Write a password');
    if (userPassword === password) {
        alert('Вы успешно авторизованы');
        break;
    } else if (userPassword == null) {
        let confirmation = confirm('Вы уверены, что хотите отменить авторизацию');
        if (confirmation === true) {
            alert('Вы отменили авторизацию');
            break;
        }
    }
}

/* 11 */
for (let i = 1; i < 51; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}
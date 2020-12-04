/* 1 */
let x = 10;
let y = x * 3;
let z = x + y;
alert(x);
alert(y);
alert(z);

/* 2 */
let firstName = prompt('Write your first name');
let lastName = prompt('Write your last name');
alert(`What's up, ${firstName} ${lastName}?`);

/* 3 */
let firstNumber = +prompt('Write the first number');
let secondNumber = +prompt('Write the second number');
alert(firstNumber*secondNumber);
alert(firstNumber-secondNumber);
alert(firstNumber/secondNumber);
alert(firstNumber+secondNumber);


/* 4 */
let workingHours = +prompt('How many working hours do you have per day?');
let weekWorkingDays = +prompt('How many working days do you have per week?');
let rate = +prompt('What is your rate per hour?')
let julySalary = workingHours * weekWorkingDays * rate * 4 + "$";
alert(julySalary);


/* 5 */
let number = +prompt('Write a number');
if(number%2){
    alert('Нечетное число')
} else{
    alert('Четное число')
}


/* 6 */
let isNumber = !isNaN(+prompt('Write number or letters'));
alert(isNumber)


/* 7 */
let randomNumber = Math.round(Math.random() * 100);
let userNumber = +prompt('Write your number');
if (randomNumber < userNumber) {
    alert('yes');
} else {
    alert('no')
}
alert(randomNumber);
alert(userNumber);


/* 8 */
let str = prompt('Что Вам нравится изучать','Мне нравится изучать Front-end');
let myStr = prompt('Что вы любите изучать?');

alert(str.includes(myStr));

let newStr = str.slice(0, 20);
let result = `${newStr} ${myStr}`;
alert(result)




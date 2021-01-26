/* 1 */
// function max(x, y) {
//     if (x > y) return x;
//     else return y;
// }
//
// console.log(max(30, 20));


/* 2 */
// function min(numbers) {
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }
//
// console.log(min(50, 90, -1, -555, -888))


/* 3 */
// let users = [
//     {firstName: 'John', lastName: 'Smith', age: 22},
//     {firstName: 'Kate', lastName: 'Black', age: 16},
//     {firstName: 'David', lastName: 'Green', age: 35},
//     {firstName: 'Tony', lastName: 'Stark', age: 15},
//     {firstName: 'Michel', lastName: 'Sun', age: 23},
//     {firstName: 'Stefan', lastName: 'Salvatore', age: 17},
//     {firstName: 'Elena', lastName: 'Gilbert', age: 17},
//     {firstName: 'Monica', lastName: 'Geller', age: 30},
//     {firstName: 'Ross', lastName: 'Geller', age: 31},
//     {firstName: 'Victoria', lastName: 'Justice', age: 16},
// ]
//
// let adultUsers = users.filter((item) => item.age > 18)
// console.log(adultUsers)
//
// users.forEach((item) => {
//     item.fullName = item.firstName + ' ' + item.lastName;
// });
// console.log(users);
//
// let usersFullName = users.map((item) => item.fullName)
// console.log(usersFullName)


/* 4 */
// function shift(array) {
//     array.splice(0, 1)
//     return array
// }
//
// console.log(shift([1, 2, 3, 4, 5]));


/* 5 */
// function push(array) {
//     array.splice(array.length, 0, 1000, 2000, 'fghjk', true)
//     return array
// }
//
// console.log(push([12, 14, 87]));

/* 6 */
// let obj = {name: 'John'}
//
// function assign(obj, ...params) {
//     for (let param of params) {
//         obj = {
//             ...obj,
//             ...param
//         }
//     }
//     return obj
// }
//
// let newObj = assign(obj, {age: 45, nationality: 'Englishman'}, {job: 'developer'})
// console.log(newObj)


/* 7 */
// function setComment(date, message, author) {
//     if (!(date) || !(message)) {
//         alert('Данные переданы некорректно');
//         return;
//     }
//     author = author || 'Anonymous';
//     return `${author}, ${date} \n${message}`
// }
//
// console.log(setComment('2021-10-09', 'hello', 'John'));
// console.log(setComment('2021-10-09'));
// console.log(setComment('2021-10-09', 'Everything is okay'));


/* 8 */
// function createTimer() {
//     let now = performance.now()
//     return function () {
//         let then = performance.now()
//         return `1. ${now} \n2. ${then}`
//     }
// }
//
// let timer = createTimer();
// alert('!');
// alert(timer());


/* 9 */
function createAdder(param) {
    return function (param1) {
        return param + param1
    }
}

let hello = createAdder('Hello, ');
alert(hello('John'));
alert(hello('Harry'));

let plus = createAdder(5);
alert(plus(1));
alert(plus(17));
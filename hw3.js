/* 1 */
// let arr = [5, '19', undefined, 'Ann', -5, 0, '27'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let el = +arr[i];
//     if (!isNaN(el)) {
//         sum += el;
//     }
// }
// alert(sum);

/* 2 */
// let array = [];
// for (let i = 0; i < 10; i++) {
//     let newArr = array.push(Math.random().toFixed(2))
//     let el = array[i] ** 5;
//     console.log(el);
// }
// console.log(array);

/* 3 */
// let frameworks = ['Angular.js', 'jQuery'];
// frameworks.unshift('Backbone.js');
// frameworks.push('ReactJS');
// frameworks.push('Vue.js’');
// frameworks.splice(1, 0, 'CommonJS');
// for (let i = 0; i < frameworks.length; i++) {
//     if (frameworks[i] === 'jQuery') {
//         // delete frameworks[i];
//         frameworks.splice(i, 1)
//         alert('Это здесь лишнее')
//     }
// }
// console.log(frameworks);

/* 4 */
// let str = 'Как однажды Жак звонарь сломал фонарь головой';
// let newArray = str.split(' ');
// let indexJacques = newArray.indexOf('Жак');
// let indexLamp = newArray.indexOf('фонарь');
// if (indexJacques !== -1 && indexLamp !== -1) {
//     newArray.splice(indexJacques - 1, 3, newArray[indexJacques], newArray[indexJacques + 1], newArray[indexJacques - 1]);
//     newArray.splice(indexLamp, 2, newArray[indexLamp + 1], newArray[indexLamp])
// }
// let newStr = newArray.join(' ');
// console.log(str);
// console.log(newStr);

/* 5 */
// let person = {
//     name: 'Ann',
//     age: 22,
//     gender: 'female',
//     married: false
// }
// let property = prompt('Write property');
// if (property in person) {
//     alert(person[property]);
// } else {
//     person[property] = prompt('Write value');
// }
// console.log(person);

/* 6 */
// let phone = {
//     brand: prompt('Write phone brand'),
//     model: prompt('Write phone model'),
//     color: prompt('Write phone color')
// }
// console.log(phone)
// person.phone = phone;
// console.log(person);

/* 7 */
// let dateNow = new Date();
// let dates = {
//     dateNow: new Date(),
//     date: new Date(dateNow.setDate(dateNow.getDate() - 365))
// }
// let userDate = prompt('Write your date yyyy-MM-dd')
// if (new Date(userDate) > dates.date && new Date(userDate) < dates.dateNow) {
//     console.log('Введенная дата попадает в диапазон дат объекта dates')
// } else {
//     console.log('Введенная дата НЕ попадает в диапазон дат объекта dates')
// }
// console.log(dates)

/* 8 */
// let myArray = [];
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     let text = prompt('Write something');
//     myArray.push(text);
// }
// for (let i = 0; i < 10; i++){
//     let el = +myArray[i];
//     if (!isNaN(el)) {
//         sum += el
//     }
// }
// alert(sum);

/* 9 */
// let multiTable = new Array(9);
// for (let i = 0; i < 9; i++) {
//     multiTable[i] = new Array(10);
//     for (let j = 0; j < 10; j++) {
//         let result = (i + 1) * (j + 1);
//         multiTable[i][j] = `${i + 1}x${j + 1} = ${result}`;
//     }
// }
// console.log(multiTable)

/* 10 */
let img = {
    src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    alt: '',
    style: {
        border: '1px solid #ccc',
        width: '200px',
    }
}
console.log(img);
/* 1 */
// let calculator = {
//     read() {
//         let x = +prompt('Write the first number')
//         let y = +prompt('Write the second number')
//         this.x = x;
//         this.y = y;
//     },
//     sum() {
//         return this.x + this.y
//     },
//     multi() {
//         return this.x * this.y
//     },
//     diff() {
//         return this.x - this.y
//     },
//     div() {
//         return this.x / this.y
//     }
// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.multi());
// alert(calculator.diff());
// alert(calculator.div());


/* 2 */
// let coffeeMachine = {
//     message: 'Your coffee is ready',
//     start(){
//         setTimeout(() => alert(this.message), 3000)
//     }
// }
// coffeeMachine.start();


/* 3 */
// let counter = {
//     count: 0,
//     inc(){
//         this.count++;
//         return this;
//     },
//     dec(){
//         this.count--;
//         return this;
//     },
//     getValue(){
//         return this.count
//     }
// }
// let current = counter.inc().inc().dec().dec().inc().dec().dec().getValue();
// alert(current)


/* 4 */
// let objData = {
//     getSum(x, y) {
//         this.x = x;
//         this.y = y;
//         alert(`${x}+${y} = ${calculator.sum.call(this)}`)
//     },
//     getMulti(x, y) {
//         this.x = x;
//         this.y = y;
//         alert(`${this.x}x${this.y} = ${calculator.multi.call(this)}`)
//     },
//     getDiff(x, y) {
//         this.x = x;
//         this.y = y;
//         alert(`${this.x}-${this.y} = ${calculator.diff.call(this)}`)
//     },
//     getDiv(x, y) {
//         this.x = x;
//         this.y = y;
//         alert(`${this.x}/${this.y} = ${calculator.div.call(this)}`)
//     },
// }
// objData.getSum(2, 10)
// objData.getMulti(2, 10)
// objData.getDiff(2, 10)
// objData.getDiv(2, 10)


/* 5 */
// let country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };
//
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// console.log(format.call(country, '', '')); // Ukraine
// console.log( format.apply(country, ['[', ']'])); // [Ukraine]
// console.log(format.call(country.capital, '', '')); // Kyiv
// console.log(format.apply(country.capital, ['', ''] )); // Kyiv
// console.log(format.apply(undefined , ['', ''])); // undefined


/* 6 */
// let user = {
//     name: 'John',
// }
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// let formatUserName = format.bind(user, '<<<', '>>>')
// console.log(formatUserName())


/* 7 */
// function concat(str1, separator, str2){
//     return str1 + separator + str2;
// }
// let hello = concat.bind(null, "Hello", ' ');
// console.log( hello('world'));


/* 8 */
/* Цикл */
// let x = +prompt('Write a number');
// let result = 1;
// for (let i = 1; i <= 3; i++) {
//     result = x * result;
// }
// console.log(result)

/* Рекурсия */

// function pow(number, n = 1) {
//     if (n < 3) {
//         return number * pow(number, n + 1)
//     }
//     return number;
// }
//
// console.log(pow(3))
// console.log(pow(2))


/* 9 */

function sum(a, b, ...rest) {
    let result = a + b;
    if (arguments.length >= 2) {
        return sum(result, ...rest)
    } else if (arguments.length === 0) {
        return 0;
    } else if (!b) {
        return a;
    }
}

console.log(sum(4, 8, 12))

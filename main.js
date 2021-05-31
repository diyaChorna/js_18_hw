// Завдання 1 forEach
let arr = [5, 6, 7, 8, 9];
let suma = 0;
arr.forEach(function (val, ind, arr){
    suma += arr[ind];
})
console.log(`Suma of all indexes = ${suma}`);

// // Завдання 2 Map
// let arr = [5, 6, 7, 8, 9];
// let pow = arr.map(function(val, ind, arr){
//     let newArr = Math.pow(arr[ind], 2);
//     console.log(newArr);
// })
// console.log(arr);

// // Завданння 3 Every
// let arr = [
//     {name: 'Ivan', country: 'Ukraine'},
//     {name: 'Petro', country: 'Ukraine'},
//     {name: 'Miguel', country: 'Cuba'}
// ]
// let every = arr.every(arr => arr.country === 'Ukraine');
// console.log(arr);
// console.log(every);

// // Завдання 4 Some
// let arr = [
//     {name: 'Ivan', country: 'Ukraine'},
//     {name: 'Petro', country: 'Ukraine'},
//     {name: 'Miguel', country: 'Cuba'}
// ]
// let some = arr.some(arr => arr.country === 'Cuba');
// console.log(arr);
// console.log(some);

// // Завдання 5 Filter
// let array = [1, 'string', [3, 4], 5, [6, 7]];
// let filterArr = array.filter(array.isArray());
// console.log(arr);
// console.log(filterArr);

// // Завдання 6 
// let arr = [1, 2, 5, 0, 4, 5, 6];
// for(let i=0; i<arr.length; i++){
//     let pow = arr.map(function(val, ind, arr){
//         while(arr[ind]!=0){
//             console.log(pow);
//     }
// })

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let suma = 0;
// while(suma!=10){
//     suma = arr.reduceRight((accum, value) => accum +=value, 0);
//     console.log(suma);
// }

// // Завдання 7
// let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// let filter = arr.filter(arr => arr >= 0);
// console.log(arr);
// console.log(filter);
// let sqrt = filter.map(function(val, ind, filter){
//     let thisSqrt = Math.sqrt(filter[ind], 2)
//     console.log(thisSqrt);
// })
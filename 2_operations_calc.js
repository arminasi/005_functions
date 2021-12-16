"use strict"

/*Write a function that calculates sum, difference, multiplication and division
between given array elements depending on passed operation symbol. Write appropriate
function for each operation.*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function calc(opt, arr) {
    if(!Array.isArray(arr)) {
        return 0;
    }
    let total = 0;
    if(opt === "*") {
        total = 1;
        arr.forEach(function (val) {
            total *= val;
        })
    } else if(opt === "+") {
        arr.forEach(function (val) {
            total += val;
        })
    } else if(opt === "-") {
        arr.forEach(function (val) {
            total -= val;
        })
    } else if(opt === "/") {
        total = 1;
        arr.forEach(function (val) {
            total /= val;
        })
    }
    return total;
}

console.log(calc("*", arr));
console.log(calc("+", arr));
console.log(calc("-", arr));
console.log(calc("/", arr));
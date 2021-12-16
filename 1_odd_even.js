"use strict"

//Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function odd_even(arr) {
    const odd = [];
    const even = [];
    if(Array.isArray(arr)) {
        arr.forEach(function (val) {
            if((val % 2)) {
                odd.push(val);
            } else
                even.push(val);
        })
    } else 
        return 0;
    return [odd, even];
}

let newArr = odd_even(nums);

console.log(newArr);
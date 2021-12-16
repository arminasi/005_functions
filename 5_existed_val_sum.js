"use strict"

/* Write a function, which receives a string, finds possible largest numbers in the string and returns their
sum. */

function filteringByNum(str) {
    const nums = [];
    let parts = [];
    for(let i = 0; i < str.length; i++) {
        if(+str[i]) {
            while(+str[i] || str[i] === "0") {
                if(str[i - 1] === "-") {
                    parts.push(-str[i]);
                    i++;
                }
                parts.push(str[i]);
                i++;
            }
            nums.push(+parts.join(""));
            parts = [];
        } else
            continue;
    }
    return nums.reduce(function (acc, elem) {
        return acc + elem;
    })
}

console.log(filteringByNum("FwrtY45KHL120mn10P"));
console.log(filteringByNum("Wert12lop-12"));

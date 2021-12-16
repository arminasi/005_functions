"use strict"

/*Given a phone number. Write a function to clean it up, so it is valid.*/

function validation(strNum) {
    const filtered = [];
    if(typeof (strNum === "srting")) {
        for(let i = 0; i < strNum.length; i++) {
            if(strNum[i] >= "0" && strNum[i] <= "9" || strNum[i] === " " || strNum[i] === "+") {
                if(strNum[i] === " ") {
                    i++;   
                }
                if(strNum[i + 1] === "+")
                    return ("Bad number")
                filtered.push(strNum[i]);
            } else 
                return ("Bad number");
        }
    }
    if(filtered[0] === "+" && filtered.length === 11 || +filtered[0]) {
        return filtered.join("");
    } else
        return ("Bad number")
}

console.log(validation("+3393653444"));
console.log(validation("3393653444"));
console.log(validation("+339"));
console.log(validation("653444"));
console.log(validation("sa"));
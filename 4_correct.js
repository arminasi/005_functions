"use strcit"

/* Given a word and a list of possible anagrams, select the correct sublist. */

function asciiWord(word) {
    let total = 0;
    for(let i = 0; i < word.length; i++) {
        total += word[i].charCodeAt(0);
    }
    return total;
}

function correct(arrOfWords, input) {
    const correctWords = [];
    for(let i = 0; i < arrOfWords.length; i++) {
        if(asciiWord(input) === asciiWord(arrOfWords[i])) {
            correctWords.push(arrOfWords[i]);
        }
    }
    return correctWords;
}

const words = ["nerwyok", "wenroyk", "chicago", "kentuki"];

console.log(correct(words, "newyork"));
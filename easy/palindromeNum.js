// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    } 
    let half = 0;

    while (x > half) {
        half = (half * 10) + (x % 10); // this check if the number ends with zero
        x = Math.floor(x / 10); // round to decimal
    }

    return x === half || x === Math.floor(half/10); // if either is true return
};




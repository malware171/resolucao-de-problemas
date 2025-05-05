"use strict";
function isPalindrome(str) {
    if (str.length < 2)
        return true;
    if (str[0] != str[str.length - 1])
        return false;
    const middle = str.substring(1, str.length - 1);
    return isPalindrome(middle);
}
console.log(isPalindrome("ovo"));

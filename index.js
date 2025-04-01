"use strict";
function multiply() {
    let a = 25;
    let b = 3;
    let soma = a + b;
    let result;
    for (let i = b; i <= soma; i++) {
        if (i % a === 0) {
            result = i;
            console.log(result);
        }
    }
}
multiply();

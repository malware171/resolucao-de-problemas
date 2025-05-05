"use strict";
function test(n) {
    if (n > 0) {
        test(n - 1);
        console.log(n);
    }
}
test(5);

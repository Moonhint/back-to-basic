
// Old Way
// var sum_the_default = (arg1, arg2) => {
//     var arg1 = arg1 || 1;
//     var arg2 = arg2 || 2;
//     return arg1 + arg2;
// }


// The New Way, Default is Usefull Guys! (Now using node v6.3.1 (npm v3.10.5))
'use strict';
let sum_the_default = (arg1 = 1, arg2 = 2) => {
    return arg1 + arg2;
}


console.info(sum_the_default());

"use strict";
var greet;
greet = function () {
    console.log('Hello, world');
};
// set optional = c?: number | string
var add = function (a, b, c) {
    if (c === void 0) { c = ''; }
    console.log(a + b);
    console.log(c);
};
add(5, 2, 52);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);

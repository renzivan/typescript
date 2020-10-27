"use strict";
// let greet: Function
// example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (x, y, action) {
    if (action === '+') {
        return x + y;
    }
    else {
        return 0;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};

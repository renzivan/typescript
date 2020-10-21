// explicit types
var character;
var age;
var isLoggedIn;
// age = 'test'
age = 55;
// arrays
// only array of strings; can't use push because its undefined, need to initialize before using push
var ninjas;
ninjas = ['renz', 'ivan'];
// can now use push
var ninjas2 = [];
ninjas2.push('test');
// union types
var mixed = [];
mixed.push('test');
mixed.push(55);
mixed.push(false);
var uid;
uid = 5123;
uid = 'test';
// objects
var ninjaOne;
ninjaOne = { name: 'renz', age: 26 };
ninjaOne = [];
var ninjaTwo;
ninjaTwo = {
    name: 'renz',
    age: 26,
    belt: 'black'
};

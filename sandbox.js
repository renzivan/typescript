// arrays
var names = ['renz', 'ivan', 'zen z'];
// can't push to different type
// names = ''
names.push('test');
// can't push to different type
// names.push(3)
// names[0] = 3
var numbers = [1, 2, 3, 4];
numbers.push(25);
// can't push to different type
// numbers.push('test')
var mixed = ['ken', 4, 'ryu', 2, 3];
mixed.push('test');
mixed.push(23);
mixed[0] = 5;
// objects
var ninja = {
    name: 'renz',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ivan';
// can't set to different type
// ninja.age = 'test'
// can't add property
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'test',
    belt: 'orange',
    age: 10
};

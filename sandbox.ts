// explicit types
let character: string
let age: number
let isLoggedIn: boolean

// age = 'test'
age = 55

// arrays

// only array of strings; can't use push because its undefined, need to initialize before using push
let ninjas: string[]

ninjas = ['renz', 'ivan']

// can now use push
let ninjas2: string[] = []

ninjas2.push('test')


// union types
let mixed: (string|number|boolean)[] = []

mixed.push('test')
mixed.push(55)
mixed.push(false)

let uid: string|number
uid = 5123
uid = 'test'

// objects
let ninjaOne: object

ninjaOne = { name: 'renz', age: 26 }
ninjaOne = []

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}

ninjaTwo = {
    name: 'renz',
    age: 26,
    belt: 'black'
}
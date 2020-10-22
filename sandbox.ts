let age: any = 25

age = true

console.log('age: ', age)

let mixed: any[] = []

mixed.push(5)
mixed.push('renz')
mixed.push(false)
console.log('mixed: ', mixed)

let ninja: { name: any, age: any }

ninja = { name: 'renz', age: 26 }
console.log('ninja: ', ninja)

ninja = { name: 26, age: 'renz' }
console.log('ninja: ', ninja)
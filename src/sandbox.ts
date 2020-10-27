// let greet: Function

// example 1
let greet: (a: string, b: string) => void

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}


// example 2
let calc: (a: number, b: number, c: string) => number

calc = (x: number, y: number, action: string) => {
  if(action === '+') {
    return x + y
  } else {
    return 0
  }
}


// example 3
let logDetails: (obj: { name: string, age: number }) => void

type person = { name: string, age: number }

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`)
}
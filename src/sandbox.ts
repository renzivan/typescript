let greet: Function

greet = () => {
  console.log('Hello, world')
}

// set optional = c?: number | string
const add = (a: number, b: number, c: number | string = ''): void => {
  console.log(a + b)
  console.log(c)
}

add(5, 2, 52)

const minus = (a: number, b: number): number => {
  return a + b
}

let result = minus(10, 7)


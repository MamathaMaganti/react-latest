// The rest operator (…) allows us to call a function with any number of 
// arguments and then access those excess arguments as an array. 
// The rest operator also allows us in destructuring array or objects. 
// The spread operator (…) allows us to expand an iterable like array into its individual elements

let a = [1,2,3]

let b = [...a, 4] // spread operator

console.log(b)


let c ={
  "a": 1,
  "b": 2,
  "c": 3,
}
let d = {...c, "d": 4, "a":5} // spread operator

console.log(d)


function test(...args) {  // rest operator
  args.sort()
  console.log(args)
}
test(5,2,1,4);
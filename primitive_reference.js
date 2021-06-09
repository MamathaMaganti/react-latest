let a = [4,5,6,7]
let b = a


console.log(b)



let person = {"name": "Mamatha",
          "age": 28
        }

        // Assigning using spread operator will only copy the contents of the object
let thirdPerson = {
  ...person
}
// Assigning objects directly will copy reference of the object, 
// so changing the person object will have impact on secPerson

let secPerson = person;
person.name = "Amar";

console.log(secPerson)


console.log(thirdPerson)

let x = "2"
let y = a // primitive type copies only contents and not the pointer 

console.log(y)

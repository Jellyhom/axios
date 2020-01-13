class User {
  fullNmae: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName= lastName
    this.fullNmae = firstName + ' ' + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('Yee', 'Huang')

console.log(greeter(user))
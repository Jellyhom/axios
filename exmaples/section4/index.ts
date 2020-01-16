class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world')
greeter.greet()

// 继承
class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}`)
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }
}

const dog = new Dog()
dog.bark()
dog.move(10)

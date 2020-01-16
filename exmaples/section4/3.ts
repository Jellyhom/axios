class Person {
  protected name: string

  protected constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`
  }
}

let howard = new Employee('Howard', 'Sales')
// console.log(howard.getElevatorPitch())
// console.log(howard.name) // 报错
// let john = new Person('john') // 报错，因为protected只能被自己和派生类访问，private只能被自己类访问
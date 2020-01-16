// 抽象类
abstract class Department {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printName(): void {
    console.log('Department name ' + this.name)
  }

  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing')
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department
department = new AccountingDepartment()
department.printName()
department.printMeeting()
// department.generateReports() // 报错，因为是Department类型
const { TestScheduler } = require("@jest/core")

const Employee = require(Employee)

describe("Employee", () => {
    // we are testing to see if we were able to make a new object with Employee()
    it("should should make a new employee", () => {
        const employee = new Employee()

        expect(typeof(employee)).toBe("object")
    }

)}
)

describe("name", () => {
    it("should give a name to the employee object", () => {
        const name = "Clare"
        const employeeName = Employee(name)
        expect(employeeName.name).toEqual(name)
    })
})

describe("id", () => {
    it("should give an id to the employee object", () => {
        const id = 9
        const employeeId = Employee(fakeName, id)
        expect(employeeId.id).toEqual(id)
    })
})

describe("email", () => {
    it("should give an email to the employee object", () => {
        const email = "henderson2350@gmail.com"
        const employeeId = Employee(fakeName, id, email)
        expect(employeeId.email).toEqual(email)
    })
})

describe("getName", () => {
    it("should get the name of the employee via getName", () => {
        const name = "Clare"
        const employeeName = new Employee(name)
        expect(employeeName.getName()).toBe(name)
    })
})

describe("getId", () => {
    it("should get the id of the employee via getName", () => {
        const id = 9
        const employeeName = new Employee(fakeName, id)
        expect(employeeName.getId()).toBe(id)
    })
})

describe("getEmail", () => {
    it("should get the email of the employee via getName", () => {
        const email = "henderson2350@gmail.com"
        const employeeName = new Employee(fakeName, id, email)
        expect(employeeName.getEmail()).toBe(email)
    })
})
// this is the main class because all engineers, interns, and managers are a sub class of employee
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
}

module.exports = Employee
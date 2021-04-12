const Manager = require(Manager)

describe("Manager", () => {
    it("should make a manager object", () => {
        const newManager = new Manager()
        expect(typeOf(newManager).toBe("object"))
    })
})

describe("officeNumber", () => {
    it("should get the office number of the manager", () => {
        const officeNumber = 9
        const newManager = new Manager(name, id, email, officeNumber)
        expect(newManager.officeNumber).toBe(officeNumber)
        
    })
})

describe("getOffice", () => {
    it("should return the office number of the manager", () => {
        const officeNumber = 9
        const newManager = new Manager(name, id, email, officeNumber)
        expect(newManager.getOffice()).toBe(officeNumber)
    })
})
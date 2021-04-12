const Intern = require("Intern")

describe("Intern", () => {
    it("should make a new Intern object", () => {
        const intern = new Intern()
        expect(typeOf(intern).toBe("object"))
        }
    )
})

describe("school", () => {
    it("should get the school of the Intern", () => {
        school = "uva"
        const fakeIntern = new Intern(fakeName, id, email, school)
        expect(fakeIntern.school()).toBe(school)
    })
})

describe("getSchool", () => {
    it("should get the intern's school", () => {
        const school = "uva"
        const fakeIntern = new Intern(fakeName, id, email, school)
        expect(fakeIntern.getSchool()).toBe(school)
    })
})

describe("getRole", () => {
    it("should get the role of the intern")
    const fakeIntern = new Intern()
    expect(fakeIntern.getRole()).toBe("Intern")
})
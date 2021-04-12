const Engineer = require("Engineer")

describe("Engineer", () => {
    it("should make a new Engineer object", () => {
        const engineerObject = new Engineer()
        expect(typeof(engineerObject).toBe("object"))
    })
})

describe("github", () => {
    it("should get the user's github username", () => {
        const newEngineer = new Engineer(name, id, email, github)
        const github = "henderson2350"
        expect(newEngineer.github).toBe(github)
    })
})

describe("getGithub", () => {
    it("should get the user's github", () => {
        const github = "henderson2350"
        const newEngineer = new Engineer(name, id, email, github)
        expect(newEngineer.getGithub()).toBe(github)
    })
})

describe("getRole", () => {
    it("should get the user's role", () => {
        const newEngineer = new Engineer()
        const role = "Engineer"
        expect(newEngineer.getRole()).toBe(role)
    })
})


const Intern = require("../lib/Intern")

const intern1 = new Intern("Sarah",2,"sarah@email.com", "UCLA")
//constructor tests:
test("Instatiate (make a record/example) of the Employee class", ()=> {
    expect(typeof(intern1)).toBe("object")
})
test("Set with a constructor the name arg of the Intern class", () => {
    expect(intern1.name).toBe("Sarah")
})
test("Set with a constructor the id of the Intern class", () => {
    expect(intern1.id).toBe(2)
})
test("Set with a constructor the email of the Intern class", () => {
    expect(intern1.email).toBe("sarah@email.com")
})
test("Set with a constructor the school of the Intern class", () => {
    expect(intern1.school).toBe("UCLA")
})
//method tests:
test("output the name from the getName method", () => {
    expect(intern1.getName()).toBe("Sarah")
})
test("output the Id from the getId method", () => {
    expect(intern1.getId()).toBe(2)
})
test("output the Email from the getEmail method", () => {
    expect(intern1.getEmail()).toBe("sarah@email.com")
})
test("output the School from the getSchool method", () => {
    expect(intern1.getSchool()).toBe("UCLA")
})
test("output the Role from the getRole method", () => {
    expect(intern1.getRole()).toBe("Intern")
})
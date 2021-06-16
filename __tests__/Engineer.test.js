const Engineer = require("../lib/Engineer");

//create an instance of the Engineer class; then test that instance of something
const engineer1 = new Engineer("Sean",4,"sean@email.com", "@sean_hacker");

test("Instatiate (make a record/example) of the Engineer class", () => {
    expect(typeof(engineer1)).toBe("object")
})
test("Set with a constructor the name arg of the Engineer class", () => {
    expect(engineer1.name).toBe("Sean")
})
test("Set with a constructor the id of the Engineer class", () => {
    expect(engineer1.id).toBe(4)
})
test("Set with a constructor the email of the Engineer class", () => {
    expect(engineer1.email).toBe("sean@email.com")
})
test("Set with a constructor the github of the Engineer class", () => {
    expect(engineer1.github).toBe("@sean_hacker")
})
//method tests:
test("output the name from the getName method", () => {
    expect(engineer1.getName()).toBe("Sean")
})
test("output the id from the getId method", () => {
    expect(engineer1.getId()).toBe(4)
})
test("output the email from the getEmail method", () => {
    expect(engineer1.getEmail()).toBe("sean@email.com")
})
test("output the role of Employee from the getRole method", () => {
    expect(engineer1.getRole()).toBe("Engineer")
})
test("output the github of Employee from the getGithub method", () => {
    expect(engineer1.getGithub()).toBe("@sean_hacker")
})

const Manager = require("../lib/Manager");

const manager1 = new Manager("Roberta", 3, "roberta@email.com", 231)

test("Instatiate (make a record/example) of the Manager class", () => {
    expect(typeof(manager1)).toBe("object")
})
test("Set with a constructor the name arg of the Manager class", () => {
    expect(manager1.name).toBe("Roberta")
})
test("Set with a constructor the id of the Manager class", () => {
    expect(manager1.id).toBe(3)
})
test("Set with a constructor the email of the Manager class", () => {
    expect(manager1.email).toBe("roberta@email.com")
})
test("Set with a constructor the officeNumber of the Manager class", () => {
    expect(manager1.officeNumber).toBe(231)
})
//method tests:
test("output the name from the getName method", () => {
    expect(manager1.getName()).toBe("Roberta")
})
test("output the id from the getId method", () => {
    expect(manager1.getId()).toBe(3)
})
test("output the email from the getEmail method", () => {
    expect(manager1.getEmail()).toBe("roberta@email.com")
})
test("output the role of Employee from the getRole method", () => {
    expect(manager1.getRole()).toBe("Manager")
})
test("output the OfficeNumber of Employee from the getOfficeNumber method", () => {
    expect(manager1.getOfficeNumber()).toBe(231)
})
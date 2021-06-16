const Employee = require("../lib/Employee");

//create an instance of the Employee class; then test that instance of something
const employee1 = new Employee("John",1,"test@email.com");

test("Instatiate (make a record/example) of the Employee class", () => {
    expect(typeof(employee1)).toBe("object")
})
test("Set with a constructor the name arg of the Employee class", () => {
    expect(employee1.name).toBe("John")
})
test("Set with a constructor the id of the Employee class", () => {
    expect(employee1.id).toBe(1)
})
test("Set with a constructor the email of the Employee class", () => {
    expect(employee1.email).toBe("test@email.com")
})
//method tests:
test("output the name from the getName method", () => {
    expect(employee1.getName()).toBe("John")
})
test("output the id from the getId method", () => {
    expect(employee1.getId()).toBe(1)
})
test("output the email from the getEmail method", () => {
    expect(employee1.getEmail()).toBe("test@email.com")
})
test("output the role of Employee from the getRole method", () => {
    expect(employee1.getRole()).toBe("Employee")
})

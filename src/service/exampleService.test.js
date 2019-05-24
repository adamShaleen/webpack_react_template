import { add, subtract, multiply, divide } from "./exampleService";

describe("Example description for a collection of tests", () => {
    it("Adds two numbers", () => {
        expect(add(1, 2)).toBe(3);
    })

    it("Subtracts param2 from param1", () => {
        expect(subtract(2, 1)).toBe(1);
    })
    
    it("Multiplies two numbers", () => {
        expect(multiply(2, 2)).toBe(4);
    })

    it("Divides two numbers", () => {
        expect(divide(8, 4)).toBe(2);
    })
})
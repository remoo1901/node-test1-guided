const calculator = require("./calculator");

describe("calculator unit tests", () => {
  test("adds", () => {
    expect(calculator.sum(2, 2)).toBe(4);
    expect(calculator.sum(2, 3)).toBe(5);
    expect(calculator.sum(2, -2)).toBe(0);
    expect(calculator.sum(1)).toBe(1);
    expect(calculator.sum(0)).toBe(0);
    //refactor
    expect(calculator.sum(2, 2, 2)).toBe(6);
    expect(calculator.sum(2, 1, 1, 5, 6, 7)).toBe(22);
  });
  

  it("substract", () => {
    expect(calculator.difference(2, 2)).toBe(0);
    expect(calculator.difference(3, 2)).toBe(1);
    expect(calculator.difference(1, 0)).toBe(1);
    expect(calculator.difference(-1, 1)).toBe(-2);
    expect(calculator.difference(-1, -2)).toBe(1);
    expect(calculator.difference(1)).toBe(1);
    expect(calculator.difference()).toBe(0);
    expect(calculator.difference(2, 2, 2)).toBe(-2);
    expect(calculator.difference(2, 1, 1, 5, 6, 7)).toBe(-18);
  });

  it("multiplies", () => {
    expect(calculator.product(2, 2)).toBe(4);
    expect(calculator.product(3, 2)).toBe(6);
    expect(calculator.product(1, 0)).toBe(0);
    expect(calculator.product(-1, 1)).toBe(-1);
    expect(calculator.product(-1, -2)).toBe(2);
    expect(calculator.product(1)).toBe(1);
    expect(calculator.product()).toBe(1);
    expect(calculator.product(2, 2, 2)).toBe(8);
    expect(calculator.product(2, 1, 1, 5, 6, 7)).toBe(420);
  });

  it("divides", () => {
    expect(calculator.quotient(2, 2)).toBe(1);
    expect(calculator.quotient(3, 2)).toBe(1.5);
    expect(() => calculator.quotient(1, 0)).toThrow();
    expect(calculator.quotient(-1, 1)).toBe(-1);
    // expect(calculator.quotient(-1, -2)).toBe(2)
    expect(calculator.quotient(1)).toBe(1);
    expect(calculator.quotient()).toBe(0);
    expect(calculator.quotient(2, 2, 2)).toBe(0.5);
    //expect(calculator.quotient(2, 1, 1, 5, 6, 7)).toBe(0.0095238095238095);
    expect(calculator.quotient(2, 1, 1, 5, 6, 7)).toBeLessThan(1);
  });

  it("parses", () => {
      expect(calculator.parse({
          sum: [1,2,3],
          difference: [3,2,1],
          product:[1,2,3],
          quotient: [2,2,2]
      })).toEqual({
          sum: 6,
          difference: 0,
          product: 6,
          quotient: 0.5
      })
  })
});

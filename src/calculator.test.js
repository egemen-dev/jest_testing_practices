import Calculator from "./calculator";

const calculator = new Calculator();

test("test 2 + 3", () => {
  expect(calculator.sum(2, 3)).toEqual(5);
});

test("test 6 - 1", () => {
  expect(calculator.subtract(6, 1)).toEqual(5);
});

test("test 1 - 5", () => {
  expect(calculator.subtract(1, 5)).toEqual(-4);
});

test("test 10 / 2", () => {
  expect(calculator.divide(10, 2)).toEqual(5);
});

test("test 2 / 10", () => {
  expect(calculator.divide(2, 10)).toEqual(0.2);
});

test("test 10 * 2", () => {
  expect(calculator.multiply(10, 2)).toEqual(20);
});

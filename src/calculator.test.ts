import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply 3 times 5 is 15", () => {
  // Arrange
  const a: number = 3;
  const b: number = 5;
  const expected: number = 15;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide 15 by 3 is 5", () => {
  // Arrange
  const a: number = 15;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide 15 by 0 throws error", () => {
  // Arrange
  const a: number = 15;
  const b: number = 0;

  // Act & Assert
  expect(() => divide(a, b)).toThrowError("Division by zero is not allowed!");
});
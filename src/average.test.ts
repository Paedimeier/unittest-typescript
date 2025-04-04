import { mean } from "./average";

test("test mean of two numbers", () => {
  const numbers: number[] = [2, 8];
  const expected: number = 5;

  const actual: number = mean(numbers);

  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  const actual: number = mean(numbers);

  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  const numbers: number[] = [];
  expect(() => mean(numbers)).toThrow();
});
import { mean } from "./average";

test("test mean of two numbers", () => {
  const numbers: number[] = [2, 8];
  const expected: number = 5;

  const actual: number = mean(numbers);

  expect(actual).toBe(expected);
});
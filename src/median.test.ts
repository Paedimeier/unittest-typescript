import { mean } from "./average";
import { median } from "./median";

describe("median", () => {
  test("test median for odd number of elements", () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
    const expected: number = 4;
    const actual: number = median(numbers);
    expect(actual).toBe(expected);
  });

  test("test median for even number of elements", () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6];
    const expected: number = 3.5;
    const actual: number = median(numbers);
    expect(actual).toBe(expected);
  });

  test("test median for no elements", () => {
    const numbers: number[] = [];
    expect(() => median(numbers)).toThrow();
  });
});
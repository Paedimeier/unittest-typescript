import { mean } from "./average";

describe("median", () => {
  test("test median for odd number of elements", () => {
    const numbers: number[] = [1, 2, 3];
    const expected: number = 0.0;
    const actual: number = median(numbers);
    expect(actual).toBe(expected);
  });

  test("test median for even number of elements", () => {
    const numbers: number[] = [1, 2, 3, 4];
    const expected: number = 0.0;
    const actual: number = median(numbers);
    expect(actual).toBe(expected);
  });

  test("test median for no elements", () => {
    const numbers: number[] = [];
    expect(() => median(numbers)).toThrow();
  });
});

function median(numbers: number[]): number {
  return 0.0;
}
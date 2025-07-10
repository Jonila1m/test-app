import { describe, expect, test } from "vitest";
import { isEven } from "./isEven";

describe("isEven function", () => {
  test("returns true for even numbers", () => {
    expect(isEven(2)).toBe(true);
  });

  test("returns false for odd numbers", () => {
    expect(isEven(3)).toBe(false);
  });

  test("returns true for 0 (edge case)", () => {
    expect(isEven(0)).toBe(true);
  });

  test("returns true for negative even numbers", () => {
    expect(isEven(-4)).toBe(true);
  });

  test("returns false for negative odd numbers", () => {
    expect(isEven(-7)).toBe(false);
  });
});

import { describe, expect, test } from "vitest";
import { reverseString } from "./reverseWord";
describe("reverseString", () => {
  test("reverses a normal word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("reverses a palindrome", () => {
    expect(reverseString("madam")).toBe("madam");
  });

  test("reverses a word with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });
});

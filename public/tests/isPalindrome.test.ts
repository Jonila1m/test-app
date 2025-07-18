import { isPalindrome } from "./isPalindrome";
import { expect, it, describe } from "vitest";

describe("isPalindrome function", () => {
  it("should return true for 121", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("should return false for -121", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it("should return false for 10", () => {
    expect(isPalindrome(10)).toBe(false);
  });
});

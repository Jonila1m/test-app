import { expect, describe, test } from "vitest";
import { isSubstring } from "./isSubstring";
// Return true if needle is a substring of haystack, else false.

// Example 1:
// Input: haystack = "typescript", needle = "script"
// Output: true

// Example 2:
// Input: haystack = "frontend", needle = "back"
// Output: false

describe("isSubstring", () => {
  test("found in middle", () => {
    expect(isSubstring("typescript", "script")).toBe(true);
  });
  test("not found", () => {
    expect(isSubstring("frontend", "back")).toBe(false);
  });
  test("empty needle", () => {
    expect(isSubstring("webdev", "")).toBe(true);
  });
});

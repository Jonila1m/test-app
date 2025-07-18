import { describe, expect, test } from "vitest";
import { countVowels } from "./vowels";
// Implement countVowels().
// Given a string, return the number of vowels (a, e, i, o, u) in the string.

// Example 1:
// Input: s = "hello"
// Output: 2

// Example 2:
// Input: s = "xyz"
// Output: 0

// Constraints:
// 1 <= s.length <= 10^4
// s consists of lowercase English letters.

describe("countVowels", () => {
  test("case 1", () => {
    expect(countVowels("hello")).toBe(2);
  });
  test("case 2", () => {
    expect(countVowels("xyz")).toBe(0);
  });
  test("case 3", () => {
    expect(countVowels("aeiou")).toBe(5);
  });
});

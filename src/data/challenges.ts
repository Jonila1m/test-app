export type TChallenge = {
  id: string;
  title: string;
  description: string;
  solutionPath: string;
  testPath: string;
};

export const challenges: TChallenge[] = [
  {
    id: "fizzbuzz",
    title: "FizzBuzz",
    description:
      "Write a program that prints numbers from 1 to N, if the numbers are divisble by 3 use the value 'Fizz', if divisible by 5 use the value 'Buzz', if divisible by 3 & 5 use the value 'FizzBuzz' ",
    solutionPath: "fizzBuzz.ts",
    testPath: "fizzBuzz.test.ts",
  },
  {
    id: "isEven",
    title: "isEven function",
    description:
      "Write a program that checks whether the given value is an even number or not, and returns the corresponding boolean value",
    solutionPath: "isEven.ts",
    testPath: "isEven.test.ts",
  },
  {
    id: "isPalindrome",
    title: "isPalindrome function",
    description:
      "Write a program that given the integer N, finds whether the number is Palindrome or not. A number is a Palindrome if it remains the same when its digits are reversed.",
    solutionPath: "isPalindrome.ts",
    testPath: "isPalindrome.test.ts",
  },
  {
    id: "isSubstring",
    title: "isSubstring function",
    description:
      "Write a program that returns true if the needle is a substring of haystack, else false.",
    solutionPath: "isSubstring.ts",
    testPath: "isSubstring.test.ts",
  },
  {
    id: "needleHaystack",
    title: "Needle in Haystack",
    description:
      "Write a program that given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
    solutionPath: "needleHaystack.ts",
    testPath: "needleHaystack.test.ts",
  },
  {
    id: "parantheses",
    title: "Valid Parenthesis",
    description:
      "Write a program that given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.  An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.",
    solutionPath: "parantheses.ts",
    testPath: "paranthess.test.ts",
  },
  {
    id: "reverseWord",
    title: "Reverse String",
    description:
      "Write a program that given a string, returns the reverse order of the words in the given string",
    solutionPath: "reverseWord.ts",
    testPath: "reverseWord.test.ts",
  },
  {
    id: "twoSum",
    title: "Two Sum",
    description:
      "Write a program that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).",
    solutionPath: "twoSum.ts",
    testPath: "twoSum.test.ts",
  },
  {
    id: "vowels",
    title: "Count Vowels",
    description:
      "Write a program that given a string, returns the number of vowels (a, e, i, o, u) in the string.",
    solutionPath: "vowels.ts",
    testPath: "vowels.test.ts",
  },
];

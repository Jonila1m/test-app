export const isValid = (input: string): boolean => {
  const stack: string[] = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of input) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
};

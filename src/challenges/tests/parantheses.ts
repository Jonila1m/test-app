export const isValid = (input: string): boolean => {
  let stack: string[] = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of input) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
};

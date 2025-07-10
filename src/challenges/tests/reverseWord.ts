export const reverseString = (word: string): string => {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  }
  return reversed;
};

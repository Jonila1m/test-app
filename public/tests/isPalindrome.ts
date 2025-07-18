export const isPalindrome = (nr: number): boolean => {
  let reversed = "";

  let number = nr.toString();
  for (let i = number.length - 1; i >= 0; i--) {
    reversed = reversed + number[i];
  }

  return number === reversed;
};

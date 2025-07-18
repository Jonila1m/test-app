export const countVowels = (word: string): number => {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
};

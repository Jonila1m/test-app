export const isSubstring = (haystack: string, needle: string): boolean => {
  if (needle === "") {
    return true;
  }
  for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return true;
    }
  }
  return false;
};

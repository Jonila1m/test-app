export const needleHaystack = (haystack: string, needle: string) => {
  if (needle === " ") {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let matched = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        matched = false;
        break;
      }
    }
    if (matched) {
      return i;
    }
  }
  return -1;
};

function isAnagram(str1, str2) {
  if (!str1 || !str2 || str1 === str2 || str1.length !== str2.length) {
    return false;
  }
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  const sortedStr1 = lowerStr1.split("").sort().join("");
  const sortedStr2 = lowerStr2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

const countingAnagrams = (inputStr) => {
  if (inputStr.length === 0) {
    throw new RangeError();
  } else if (inputStr.length === 1) {
    return 0;
  }
  const str = inputStr.split(" ");
  const uniqueStr = [...new Set(str)];
  let anagramCount = 0;
  for (let i = 0; i < uniqueStr.length - 1; i += 1) {
    if (isAnagram(uniqueStr[i], uniqueStr[i + 1])) {
      anagramCount += 1;
    }
  }
  return anagramCount;
};

export { countingAnagrams };

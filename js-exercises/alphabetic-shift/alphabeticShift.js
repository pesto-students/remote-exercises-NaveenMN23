const alphabeticShift = (input) => {
  let result = "";
  for (const el of input) {
    const code = el.charCodeAt();
    if ((code < 65 || code > 90) && (code < 97 || code > 122)) {
      return false;
    }
    if (code === 90) {
      result += String.fromCharCode(65);
    } else if (code === 122) {
      result += String.fromCharCode(97);
    } else {
      result += String.fromCharCode(code + 1);
    }
  }
  return result;
};

export { alphabeticShift };

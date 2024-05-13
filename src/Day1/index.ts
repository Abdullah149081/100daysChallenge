{
  const findLargestString = (input: string): string => {
    if (
      !input ||
      input.length === 0 ||
      input.trim().length === 0 ||
      typeof input !== "string"
    ) {
      return "Invalid input";
    }

    const words = input.split(" ");
    let largestWord = "";
    for (const word of words) {
      if (word.length > largestWord.length) {
        largestWord = word;
      }
    }
    return largestWord;
  };

  const input = "Abdullah Al Masud is a software Developer";
  const output = findLargestString(input);
  console.log(output);
}

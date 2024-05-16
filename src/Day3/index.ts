{
  const countCharacter = (str: string, char: string): number => {
    if (!str || !char) {
      throw new Error("Please provide valid input");
    }

    let count = 0;
    const strArr = str.split("");

    for (const sElement of strArr) {
      if (sElement.toLowerCase() === char.toLowerCase()) {
        count++;
      }
    }
    return count;
  };

  const result = countCharacter("Abdullah  Al Masud", "a");
  console.log(result);
}

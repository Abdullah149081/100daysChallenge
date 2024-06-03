{
  const countVowelStrings = (s: string): number => {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (const char of s) {
      if (vowels.includes(char.toLowerCase())) {
        count++;
      }
    }
    return count;
  };

  console.log(countVowelStrings("Abdullah Al Masud"));
}

{
  const isPalindrome = (str: string): string => {
    // (/\W/g, "") removes all non-alphanumeric characters from the string and replace(/_/g, "") removes all underscores from the string.

    const strTolowerCase = str.toLowerCase().replace(/[\W_]/g, "");

    const reversedStr = strTolowerCase.split("").reverse().join("");

    return strTolowerCase === reversedStr ? "Palindrome" : "Not Palindrome";
  };

  console.log(isPalindrome("A man, a plan , A canal , Panama"));
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("masud"));
}

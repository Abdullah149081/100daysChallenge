{
  const addHashString = (input: string): string => {
    if (
      input.length <= 30 ||
      input.length >= 100 ||
      typeof input !== "string" ||
      input === "" ||
      input.trim() === ""
    ) {
      return "Invalid Input";
    }

    // /[\s]+/ is a regular expression that matches one or more whitespace characters
    // (spaces, tabs, line breaks).

    const str = input.split(/[\s]+/);
    const result = str.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // join the array of strings to form a single string
    return `#${result.join("")}`;
  };

  const input = "Hello World!   JavaScript is awesome!";
  const output = addHashString(input);
  console.log(output);
}

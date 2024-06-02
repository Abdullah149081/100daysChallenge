{
  const removeDuplicatesArray = (num: number[]): number[] => {
    const result = Array.from(new Set(num));
    return result;
  };

  console.log(removeDuplicatesArray([1, 1, 2]));
}

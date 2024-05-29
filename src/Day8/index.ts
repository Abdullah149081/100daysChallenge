{
  const checkArrayEqual = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    // every method will return true if all the elements in the array pass the test
    return arr1.every((value, index) => value === arr2[index]);
  };

  console.log(checkArrayEqual([1, 2, 3], [1, 2, 3])); // true
  console.log(checkArrayEqual([1, 2, 3], [1, 2, 4])); // false
  console.log(checkArrayEqual([], [])); // true
}

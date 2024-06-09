{
  
  const arrayElementOfSum = (arr: number[]): number => {
    const result = arr.reduce((prev, curr) => prev + (curr + curr), 0);
    return result;
  };

  console.log(arrayElementOfSum([1, 2, 3])); // Output : 12
}

{
  const findMax = (arr: number[]): number => {
    const max = Math.max(...arr);
    return max;
  };

  console.log(findMax([1, 20, 3, 4, 5, 6, 7, 8]));
  console.log(findMax([-1, -2, -10, -4, -5, -6]));
  console.log(findMax([1]));
}

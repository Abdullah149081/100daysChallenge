{
  const factorial = (n: number): number => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };

  const main = (n: number): void => {
    console.log(factorial(n));
  };

  main(5);
}

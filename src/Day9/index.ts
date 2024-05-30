{

  const countDigitsSum = (n: number): number => {
    const sum = Array.from(String(n), Number);

    const result = sum.reduce((acc, curr) => acc + curr, 0);
    return result;
  };

  console.log(countDigitsSum(1234)); // 10
  console.log(countDigitsSum(123456)); // 21
}

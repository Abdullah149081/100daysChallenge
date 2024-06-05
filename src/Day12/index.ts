{
  
  const IsPowerOfTwo = (num: number): boolean => {
    if (num === 0) return false;

    let op = false;

    for (let i = 1; i < num; i++) {
      // 2^i = num or 2*2*2
      if (2 ** i === num) {
        op = true;
      }
    }

    return op;
  };

  console.log(IsPowerOfTwo(8)); // true
  console.log(IsPowerOfTwo(7)); // false
}

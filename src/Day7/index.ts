{
  const giveAverage = (arr: number[]): { result: number } => {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);

    // Answer 7, rounds to the nearest integer. 6.4 -> 6, 6.5 -> 7
    const result = Math.round(sum / arr.length);

    // Answer 6, rounds up. 6.4 -> 7, 6.5 -> 7
    // const averageCeil = Math.ceil(sum / arr.length);

    // Answer 5, rounds down. 5.4 -> 5, 5.6 -> 5
    // const averageFloor = Math.floor(sum / arr.length);

    return { result };
  };

  const arr = [1, 2, 3, 4, 7];
  console.log(giveAverage(arr));
}

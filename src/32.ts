function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array is empty");
  }

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum / numbers.length;
}

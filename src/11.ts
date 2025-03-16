function getRandomNumber(maxValue: number): number {
  return Math.floor(Math.random() * maxValue);
}

export const random = getRandomNumber(10);

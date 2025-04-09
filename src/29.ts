function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate average of empty array.");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Example usage:
const testArray1: number[] = [1, 2, 3];
console.log(calculateAverage(testArray1)); // Output: 2

const testArray2: number[] = [];
console.log(calculateAverage(testArray2)); // Throws an error

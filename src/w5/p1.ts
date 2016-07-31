export default function calculator(input: number): number[] {
  const steps = [
    [0],
    [1],
    [1, 2],
    [1, 3]
  ];
  const ascSortArrayByLength = (x, y) => x.length - y.length;
  const filterNonEmptyArray = (arr) => arr.length !== 0

  for (let i = 4; i <= input; i++) {
    let a = i % 3 === 0 ? steps[i / 3] : [];
    let b = i % 2 === 0 ? steps[i / 2] : [];
    let c = steps[i - 1];

    let min = [a, b, c].filter(filterNonEmptyArray).sort(ascSortArrayByLength)[0]

    steps[i] = [...min, i];
  }

  return steps[input];
}


// this uses much less memory but needs more tranformations
export function calculatorMemoryOptimized(input: number): number[] {
  const steps = [0, 1, 2, 2];
  const ascSort = (x, y) => x - y;
  const filterNonEmpty = (val) => !!val;

  for (let i = 4; i <= input; i++) {
    let a = i % 3 === 0 ? steps[i / 3] : null;
    let b = i % 2 === 0 ? steps[i / 2] : null;
    let c = steps[i - 1];

    let min = [a, b, c].filter(filterNonEmpty).sort(ascSort)[0]

    steps[i] = min + 1;
  }

  // now use backtrace to find sequence of numbers
  const sequenceOfNumbers = [input];
  let currentNumber = input;
  while (currentNumber > 1) {
    const numberOfSteps = steps[currentNumber] - 1;
    let prevNumber;
    for (let testNumber = 0; testNumber < steps.length; testNumber++) {
      const hasRightNumberOfSteps = steps[testNumber] === numberOfSteps;
      const canBeTranformedToNextNumber = currentNumber / 3 === testNumber ||
                                          currentNumber / 2 === testNumber ||
                                          currentNumber - 1 === testNumber;
      if (hasRightNumberOfSteps && canBeTranformedToNextNumber) {
        prevNumber = testNumber;
        break;
      }
    }

    sequenceOfNumbers.unshift(prevNumber);
    currentNumber = prevNumber;
  }

  return sequenceOfNumbers;
}
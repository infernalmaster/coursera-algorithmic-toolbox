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

  for (let i = 4; i <= input; i++) {
    let a = i % 3 === 0 ? steps[i / 3] : Infinity;
    let b = i % 2 === 0 ? steps[i / 2] : Infinity;
    let c = steps[i - 1];

    let min = [a, b, c].sort(ascSort)[0]

    steps[i] = min + 1;
  }


  // now use backtrace to find sequence of numbers
  let numb = input;
  const sequenceOfNumbers = [];
  const ascSortBySteps = (x, y) => x.steps - y.steps;
  while (numb > 0) {
    sequenceOfNumbers.unshift(numb);

    let a = numb % 3 === 0 ? { steps: steps[numb / 3], number: numb / 3 } : { steps: Infinity, number: 0 };
    let b = numb % 2 === 0 ? { steps: steps[numb / 2], number: numb / 2 } : { steps: Infinity, number: 0 };
    let c = { steps: steps[numb - 1], number: numb - 1 };

    let min = [a, b, c].sort(ascSortBySteps)[0];

    numb = min.number;
  }


  return sequenceOfNumbers;
}

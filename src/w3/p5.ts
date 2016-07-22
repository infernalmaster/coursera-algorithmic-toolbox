export default function sum(input: number, usedNumbers: number[] = []) {
  //  edge case 0
  if (input === 2) {
    return [2]
  }

  //  edge case 1
  if (usedNumbers.length === 0) {
    return sum(input - 1, [1])
  }

  // now go
  if (input === 0) {
    return usedNumbers
  }

  const nextNumber = usedNumbers[usedNumbers.length - 1] + 1

  // edge case when we can't find nextNumber in the next iteration
  if ((input - nextNumber) <= nextNumber && input !== nextNumber) {
    return [...usedNumbers, input]
  }

  return sum(input - nextNumber, [...usedNumbers, nextNumber])
}

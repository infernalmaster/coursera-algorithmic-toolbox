export function quickSort(input: number[], left: number = 0, right: number = input.length - 1): void {
  if (left >= right) {
    return
  }

  const k = Math.floor((left + right) / 2);
  [input[left], input[k]] = [input[k], input[left]]

  const m = partition2(input, left, right)
  quickSort(input, left, m - 1);
  quickSort(input, m + 1, right);
}


function partition2(input: number[], left: number = 0, right: number = input.length - 1): number {
  let pivot = input[left]

  let virtualPivotIndex = left

  for (let i = virtualPivotIndex + 1; i <= right; i++) {
    if (input[i] <= pivot) {
      virtualPivotIndex += 1;
      [input[i], input[virtualPivotIndex]] = [input[virtualPivotIndex], input[i]]
    }
  }

  [input[virtualPivotIndex], input[left]] = [input[left], input[virtualPivotIndex]]

  return virtualPivotIndex
}

let qsa = 0;
export function quickSortAdvanced(input: number[], left: number = 0, right: number = input.length - 1): void {
  if (left >= right) {
    return
  }

  const k = Math.floor((left + right) / 2);
  [input[left], input[k]] = [input[k], input[left]]

  const [m1, m2] = partition3(input, left, right)
  quickSortAdvanced(input, left, m1 - 1);
  quickSortAdvanced(input, m2 + 1, right);
}

function partition3(input: number[], left: number = 0, right: number = input.length - 1): number[] {
  let pivot = input[left];

  let virtualPivotIndexStart = left;
  let virtualPivotIndexEnd = left;

  for (let i = left + 1; i <= right; i++) {
    if (input[i] < pivot) {
      virtualPivotIndexStart += 1;
      virtualPivotIndexEnd += 1;
      [input[i], input[virtualPivotIndexStart]] = [input[virtualPivotIndexStart], input[i]]
    } else if (input[i] === pivot) {
      virtualPivotIndexEnd += 1;
      [input[i], input[virtualPivotIndexEnd]] = [input[virtualPivotIndexEnd], input[i]]
    }
  }

  [input[virtualPivotIndexStart], input[left]] = [input[left], input[virtualPivotIndexStart]]

  return [virtualPivotIndexStart, virtualPivotIndexEnd]
}

export function mergeSort(arr: number[], left: number = 0, right: number = arr.length - 1): void {
  if (right - left < 1) {
    return;
  }

  const central = Math.floor((left + right) / 2);

  mergeSort(arr, left, central)
  mergeSort(arr, central + 1, right)

  merge(arr, left, central, right)
}


function merge(arr: number[], left: number, central: number, right: number): void {
  let firstIndex = left;
  let secondIndex = central + 1;
  let tmpArr = [];

  for (let k = left; k <= right; k++) {
    if (secondIndex > right || (firstIndex <= central && arr[firstIndex] <= arr[secondIndex])) {
      tmpArr[k] = arr[firstIndex];
      firstIndex++;
    } else {
      tmpArr[k] = arr[secondIndex];
      secondIndex++;
    }
  }

  for (let k = left; k <= right; k++) {
    arr[k] = tmpArr[k]
  }
}

export function getNumberOfInversions(arr: number[], left: number = 0, right: number = arr.length - 1): number {
  let numb = 0

  if (right - left <= 0) {
    return numb
  }

  const central = Math.floor((left + right) / 2);


  numb += getNumberOfInversions(arr, left, central)
  numb += getNumberOfInversions(arr, central + 1, right)

  // write your shit here
  numb += inversion(arr, left, central, right)

  return numb
}

function inversion(arr: number[], left: number, central: number, right: number): number {
  let firstIndex = left;
  let secondIndex = central + 1;

  let inversions = 0

  for (let k = left; k <= right; k++) {
    if (secondIndex > right || (firstIndex <= central && arr[firstIndex] <= arr[secondIndex])) {
      firstIndex++;
    } else {
      secondIndex++;
      if (firstIndex < central) {
        inversions++;
      }
    }
  }


  return inversions;
}
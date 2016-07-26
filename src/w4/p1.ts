
export function binarySearch(arr: number[], searched: number, low: number = 0, high: number = arr.length - 1): number {
  if (high < low) {
    return - 1
  }

  const mid = Math.floor(low + (high - low) / 2)

  if (searched === arr[mid]) {
    return mid
  } else if (searched < arr[mid]) {
    return binarySearch(arr, low, mid - 1, searched)
  } else {
    return binarySearch(arr, mid + 1, high, searched)
  }
}

export default function bSearch(arr: number[], searched: number[]): number[] {
  return searched.map(s => binarySearch(arr, s))
}
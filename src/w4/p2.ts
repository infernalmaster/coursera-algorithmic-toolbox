export default function majorityElement(input: number[]): number {
  const repeatsOfElement = {}

  for (let i = 0; i < input.length; i++) {
    const el = input[i]

    if (repeatsOfElement[el]) {
      repeatsOfElement[el] += 1
    } else {
      repeatsOfElement[el] = 1
    }

    if (repeatsOfElement[el] > (input.length / 2)) {
      return 1
    }
  }

  return 0
}

// # Uses python3
// import sys

// def get_majority_element(a, left, right):
//     if left == right:
//         return -1
//     if left + 1 == right:
//         return a[left]
//     #write your code here
//     return -1

// if __name__ == '__main__':
//     input = sys.stdin.read()
//     n, *a = list(map(int, input.split()))
//     if get_majority_element(a, 0, n) != -1:
//         print(1)
//     else:
//         print(0)

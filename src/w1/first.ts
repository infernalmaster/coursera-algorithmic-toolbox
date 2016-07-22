export default function max(arr: number[]): number {
  const newArr = arr.sort((a, b) => b - a);
  return newArr[0] * newArr[1];
}

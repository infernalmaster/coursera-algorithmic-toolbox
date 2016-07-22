export default function fibLastDigit(n: number): number {
  const fibs = [0, 1]

  for (let i = 2; i <= n; i++) {
    fibs[i] = (fibs[i - 2] + fibs[i - 1]) % 10;
  }

  return fibs[n];
}

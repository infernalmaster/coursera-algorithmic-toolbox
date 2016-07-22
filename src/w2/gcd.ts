export default function gcd(a: number, b: number): number {
  const [smaller, bigger] = a < b ? [a, b] : [b, a]

  if (smaller === 0) {
    return bigger;
  }

  return gcd(bigger % smaller, smaller)
}

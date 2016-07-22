// export default function fibonacci(n: number): number {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 2) + fibonacci(n - 1);
//   }
// }

export default function fibonacci(n: number): number {
  const fibs = [0, 1]

  for (let i = 2; i <= n; i++) {
    fibs[i] = fibs[i - 2] + fibs[i - 1]
  }

  return fibs[n];
}

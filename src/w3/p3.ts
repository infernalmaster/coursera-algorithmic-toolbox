
const descSort = (a, b) => b - a
const ascSort = (a, b) => a - b

export default function minDot(a: Array<number>, b: Array<number>) {
  const descA = a.sort(descSort)
  const ascB = b.sort(ascSort)

  return descA.reduce((sum, aN, i) => {
    return sum + aN * ascB[i]
  }, 0)
}

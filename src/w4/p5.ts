interface Line {
  x0: number
  x1: number
}

// this is simply beautiful but not fast
export default function pointsInLines(lines: Line[], points: number[]): number[] {
  return points.map(p => lines.filter(l => l.x0 <= p && p <= l.x1).length)
}

// this is maybe faster or maybe not)
export function fasetPointsInLines(lines: Line[], points: number[]): number[] {
  const sortedLines = lines.sort((a, b) => (a.x0 - b.x0) * 10 + (a.x1 - b.x1));

  let lineIndex = 0;
  return points.map(p => {
    let quantity = 0;

    // we ignore all lines that finished before "p"
    // and they also finishes before all next "p""
    while (sortedLines[lineIndex] && sortedLines[lineIndex].x1 < p) {
      lineIndex++;
    }

    for (let i = lineIndex; i < sortedLines.length; i++) {
      // stop when line starts after "p",
      // all next lines starts after "p" too
      if (sortedLines[i].x0 > p) {
        break;
      }
      // else line starts before p and finishes after p
      quantity++;
    }

    return quantity;
  })
}

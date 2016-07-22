interface Segment {
  a: number
  b: number
}

const ascSort = (a: Segment, b: Segment) => a.a - b.a

export default function points(segments: Array<Segment>): Array<number> {
  const sortedSegments = segments.sort(ascSort)

  const conjointSegments = [sortedSegments[0]]
  sortedSegments.forEach(s => {
    const lastConjointSegment = conjointSegments[conjointSegments.length - 1]

    if (s.a > lastConjointSegment.b) {
      conjointSegments.push(s)
    } else {
      lastConjointSegment.a = Math.max(lastConjointSegment.a, s.a)
      lastConjointSegment.b = Math.min(lastConjointSegment.b, s.b)
    }
  })

  return conjointSegments.map(s => s.b);
}

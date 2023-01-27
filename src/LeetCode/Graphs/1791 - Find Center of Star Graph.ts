export function findCenter(edges: number[][]): number {
  const [[a, b], [c, d]] = edges;
  if (a === c || a === d) return a;
  if (b === c || b === d) return b;
  throw new Error("not a star graph");
}

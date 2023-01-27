export function generate(numRows: number): number[][] {
  const pascal: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      pascal.push([1]);
    } else {
      const prev = pascal[i - 1];
      const row: number[] = [];
      row.push(prev[0]);
      for (let j = 0; j < prev.length - 1; j++) {
        row.push(prev[j] + prev[j + 1]);
      }
      row.push(prev.at(-1) as number);
      pascal.push(row);
    }
  }
  return pascal;
}

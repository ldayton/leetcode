// TODO fix
export function maxArea(heights: number[]): number {
  const firstHeight: Map<number, number> = new Map();
  let largestAreaSoFar = 0;
  for (let x = 0; x < heights.length; x++) {
    const heightAtX = heights[x];
    const fx = firstHeight.get(heightAtX);
    if (fx !== undefined) {
      let area = (x - fx) * heightAtX;
      largestAreaSoFar = Math.max(largestAreaSoFar, area);
    } else {
      firstHeight.set(heightAtX, x);
    }
  }
  return largestAreaSoFar;
}

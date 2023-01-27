// TODO speed up
export function threeSum(nums: number[]): number[][] {
  const triples: Set<string> = new Set();
  const map: Map<number, Set<number>> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const maybe = map.get(num);
    if (maybe === undefined) {
      map.set(num, new Set([i]));
    } else {
      maybe.add(i);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        const want = -1 * (nums[i] + nums[j]);
        const maybe = map.get(want);
        if (maybe !== undefined) {
          const candidates = [...maybe].filter((x) => x !== i && x !== j);
          candidates.forEach((cIdx) => {
            triples.add(
              JSON.stringify(
                [nums[i], nums[j], nums[cIdx]].sort((a, b) => a - b)
              )
            );
          });
        }
      }
    }
  }
  return Array.from(triples).map((s) => JSON.parse(s));
}

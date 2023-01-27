export function majorityElement(nums: number[]): number {
  const counts: Map<number, number> = new Map();
  for (let num of nums) {
    if (counts.has(num)) {
      counts.set(num, (counts.get(num) as number) + 1);
    } else {
      counts.set(num, 1);
    }
  }
  for (let [num, count] of counts.entries()) {
    if (count > nums.length / 2) {
      return num;
    }
  }
  return -1;
}

export function thirdMax(nums: number[]): number {
  nums = Array.from(new Set(nums)).sort((a, b) => a - b);
  if (nums.length < 3) {
    return nums.at(-1) as number;
  } else {
    return nums.at(-3) as number;
  }
}

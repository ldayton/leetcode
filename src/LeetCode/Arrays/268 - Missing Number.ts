export function missingNumber(nums: number[]): number {
  nums = [...nums].sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      return nums[i - 1] + 1;
    }
  }
  const smallest = nums.at(0) as number;
  const largest = nums.at(-1) as number;
  if (smallest > 0) {
    return smallest - 1;
  } else {
    return largest + 1;
  }
}

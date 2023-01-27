export function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number
): string[] {
  const ranges: string[] = [];
  nums = [lower - 1, ...nums, upper + 1];
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff <= 1) {
      continue;
    }
    if (diff === 2) {
      ranges.push(`${nums[i - 1] + 1}`);
    } else {
      ranges.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }
  return ranges;
}

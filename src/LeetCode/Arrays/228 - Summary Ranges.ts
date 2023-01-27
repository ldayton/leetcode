export function summaryRanges(nums: number[]): string[] {
  const ranges: string[] = [];
  if (nums.length === 0) {
    return [];
  }
  let rangeStart = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff >= 2) {
      if (nums[i - 1] === rangeStart) {
        ranges.push(rangeStart.toString());
      } else {
        ranges.push(`${rangeStart}->${nums[i - 1]}`);
      }
      rangeStart = nums[i];
    }
  }
  if (nums.length >= 1) {
    const last = nums.at(-1);
    if (rangeStart === last) {
      ranges.push(last.toString());
    } else {
      ranges.push(`${rangeStart}->${last}`);
    }
  }
  return ranges;
}

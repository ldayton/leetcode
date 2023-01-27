export function removeDuplicates(nums: number[]): number {
  let i = nums.length - 1;
  while (i >= 1) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
    i--;
  }
  return nums.length;
}

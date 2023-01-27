export function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  while (true) {
    const mid = Math.floor((start + end) / 2);
    const midNum = nums[mid];
    if (end - start > 1) {
      if (target < midNum) {
        end = mid;
      } else if (target > midNum) {
        start = mid;
      } else {
        return mid;
      }
    } else {
      if (nums[start] >= target) {
        return start;
      } else if (nums[end] >= target) {
        return end;
      } else {
        return end + 1;
      }
    }
  }
}

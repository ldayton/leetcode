export function pivotIndex(nums: number[]): number {
  const leftSums: number[] = [];
  const rightSums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      leftSums[i] = 0;
    } else {
      leftSums[i] = leftSums[i - 1] + nums[i - 1];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      rightSums[i] = 0;
    } else {
      rightSums[i] = rightSums[i + 1] + nums[i + 1];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSums[i] === rightSums[i]) {
      return i;
    }
  }
  return -1;
}

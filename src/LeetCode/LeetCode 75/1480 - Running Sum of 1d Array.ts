export function runningSum(nums: number[]) {
  const runningSum: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const sofar = i === 0 ? 0 : runningSum[i - 1];
    runningSum[i] = sofar + nums[i];
  }
  return runningSum;
}

export {};

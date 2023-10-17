function getConcatenation(nums: number[]): number[] {
    const ans: number[] =  [];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < nums.length; j++) {
            ans[j + (i * nums.length)] = nums[j]
        }
    }
    return ans;
};
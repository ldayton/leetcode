export function intersection(nums1: number[], nums2: number[]): number[] {
  nums1 = Array.from(new Set(nums1));
  const set2 = new Set(nums2);
  return nums1.filter((e) => set2.has(e));
}

import { TreeNode } from "../common.js";

export function maxDepth(root: TreeNode | null, depth?: number): number {
  if (root === null || depth === undefined) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left, depth), maxDepth(root.right, depth));
}

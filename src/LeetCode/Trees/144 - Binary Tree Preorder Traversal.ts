import { TreeNode } from "../common.js";

export function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
}

import { TreeNode } from "../common.js";

export function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}

export {};

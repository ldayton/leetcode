import { TreeNode } from "../common.js";

export function invertTree(root: TreeNode | null): TreeNode | null {
  ((root: TreeNode | null): void => {
    if (!root) {
      return;
    }
    [root.right, root.left] = [root.left, root.right];
    invertTree(root.left);
    invertTree(root.right);
  })(root);
  return root;
}

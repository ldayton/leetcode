import { TreeNode } from "../common.js";

export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  return isSymmetricPair(root.left, root.right);
}

function isSymmetricPair(
  left: TreeNode | null,
  right: TreeNode | null
): boolean {
  if (left === null) {
    return right === null;
  } else if (right === null) {
    return left === null;
  } else {
    if (left.val !== right.val) {
      return false;
    }
    const leftSymmetric = isSymmetricPair(left.left, right.right);
    const rightSymmetric = isSymmetricPair(left.right, right.left);
    return leftSymmetric && rightSymmetric;
  }
}

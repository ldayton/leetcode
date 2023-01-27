import { TreeNode } from "../common.js";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return (
    JSON.stringify(inorderTraversal(p)) === JSON.stringify(inorderTraversal(q))
  );
}

function inorderTraversal(root: TreeNode | null, pos: string = ""): string[] {
  if (root === null) {
    return ["null"];
  }
  return [
    ...inorderTraversal(root.left, "L"),
    `${pos}-${String(root.val)}`,
    ...inorderTraversal(root.right, "R"),
  ];
}

export class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
 export const sortedArrayToBST = (nums: number[]): TreeNode | null => {
    // Sort the array in ascending order
    const sortedNums = nums.slice().sort((a, b) => a - b);
  
    if (sortedNums.length === 0) {
      return null;
    }
  
    const buildBST = (start: number, end: number): TreeNode | null => {
      if (start > end) {
        return null;
      }
  
      const mid = Math.floor((start + end) / 2);
      const root = new TreeNode(sortedNums[mid]);
  
      root.left = buildBST(start, mid - 1);
      root.right = buildBST(mid + 1, end);
  
      return root;
    };
  
    return buildBST(0, sortedNums.length - 1);
  };
  
  // Example Usage:
  const unsortedArray = [3, 1, 4, 6, 2, 5, 7];
  const bstRoot = sortedArrayToBST(unsortedArray);
  
  console.log(bstRoot);
  
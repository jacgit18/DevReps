import { binaryTreePaths } from "../DFS/LC257"
import { hasPathSum } from "../DFS/lc112"
import { pathSumTwo } from "../DFS/lc113"
import { sumNumbers } from "../DFS/lc129"
import { isValidSequence } from "../DFS/lc1430"
import { inorderSuccessor } from "../DFS/lc285"
import { pathSum } from "../DFS/lc437"
import { maxPathSum } from "./lc124"
import { diameterOfBinaryTree } from "./lc543"


export const SolutionDFS = {
  lc112: hasPathSum,
  lc113: pathSumTwo,
  lc124: maxPathSum,
  lc129: sumNumbers,
  lc257: binaryTreePaths,
  lc285: inorderSuccessor,
  lc437: pathSum,
  lc543: diameterOfBinaryTree,
  lc1430: isValidSequence,
}

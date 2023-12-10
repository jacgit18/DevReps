import { binaryTreePaths } from "./LC257"
import { hasPathSum } from "./lc112"
import { pathSumTwo } from "./lc113"
import { maxPathSum } from "./lc124"
import { sumNumbers } from "./lc129"
import { isValidSequence } from "./lc1430"
import { inorderSuccessor } from "./lc285"
import { pathSum } from "./lc437"
import { diameterOfBinaryTree } from "./lc543"

export const AttemptDFS = {
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

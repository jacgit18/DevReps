import { isSameTree } from "../BFS/lc100";
import { isSymmetric } from "../BFS/lc101";
import { levelOrderTraversal } from "../BFS/lc102VistAllLevelPureBFS";
import { zigzagLevelOrder } from "../BFS/lc103";
import { maxDepth } from "../BFS/lc104";
import { RecursiveBFSFunc } from "../BFS/lc107";
import { minDepth } from "../BFS/lc111";
import { connect } from "../BFS/lc117";
import { averageOfLevels } from "../BFS/lc637";


export const SolutionBFS = {
  lc100: isSameTree,
  lc101: isSymmetric,
  lc102: levelOrderTraversal,
  lc103: zigzagLevelOrder,
  lc104: maxDepth,
  lc107: RecursiveBFSFunc,
  lc111: minDepth,
  lc117: connect,
  lc637: averageOfLevels,
}

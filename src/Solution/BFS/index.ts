import { isSameTree } from "../BFS/lc100";
import { isSymmetric } from "../BFS/lc101";
import { levelOrderTraversal, levelOrderTraversalRec } from "../BFS/lc102VistAllLevelPureBFS";
import { zigzagLevelOrder } from "../BFS/lc103";
import { maxDepth } from "../BFS/lc104";
import { RecursiveBFSFunc } from "../BFS/lc107";
import { minDepth } from "../BFS/lc111";
import { connect } from "../BFS/lc117";
import { averageOfLevels } from "../BFS/lc637";


export const OptimalBFS_Solution = {
  lc100: isSameTree,
  lc101: isSymmetric,
  lc102Iter: levelOrderTraversal,
  lc102Rec: levelOrderTraversalRec,
  lc103: zigzagLevelOrder,
  lc104: maxDepth,
  lc107: RecursiveBFSFunc.levelOrderBottom,
  lc111: minDepth,
  lc117: connect,
  lc637: averageOfLevels,
}

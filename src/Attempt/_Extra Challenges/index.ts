import { attempt } from "./Challenge1_0"
import { decompressString } from "./ChallengeTwo"
import { flattenObject } from "./FlattenaDictionary"
import { getNumberOfIslands } from "./IslandCount"
import { SUPPLIER_PRODUCT } from "./challengeThree"
import { numPairsDivisibleBy60 } from "./lc1010"
import { distributeCandiesTwo } from "./lc1103"
import { longestCommonSubsequence } from "./lc1143"
import { numDistinct } from "./lc115"
import { longestCommonPrefix } from "./lc14"
import { maxAlternatingSum } from "./lc1911"
import { rob } from "./lc198"
import { isValid } from "./lc20"
import { isAnagram } from "./lc242"
import { firstUniqChar } from "./lc387"
import { validIPAddress } from "./lc468"
import { groupAnagrams } from "./lc49"
import { longestPalindromeSubseq } from "./lc516"
import { spiralOrder } from "./lc54"
import { distributeCandies } from "./lc575"
import { countSubstrings } from "./lc647"
import { climbStairs } from "./lc70"
import { minDistance } from "./lc72"
import { searchMatrix } from "./lc74"
import { superEggDrop } from "./lc887"
import { nameMatch } from "./nameMatch"

export const AttemptExtra = {
  challengeOne: attempt,
  challengeTwo: decompressString,
  challengeThree: SUPPLIER_PRODUCT,
  flat: flattenObject,
  island: getNumberOfIslands,
  matchName: nameMatch,
  lc14: longestCommonPrefix,
  lc20: isValid,
  lc49: groupAnagrams,
  lc54: spiralOrder,
  lc70: climbStairs,
  lc72: minDistance,
  lc74: searchMatrix,
  lc115: numDistinct,
  lc198: rob,
  lc242: isAnagram,
  lc387: firstUniqChar,
  lc468: validIPAddress,
  lc516: longestPalindromeSubseq,
  lc575: distributeCandies,
  lc647: countSubstrings,
  lc887: superEggDrop,
  lc1010: numPairsDivisibleBy60,
  lc1103: distributeCandiesTwo,
  lc1143: longestCommonSubsequence,
  lc1911: maxAlternatingSum,
}

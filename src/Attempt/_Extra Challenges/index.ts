import { attempt } from "./Challenge1_0"
import { decompressString } from "./ChallengeTwo"
import { SUPPLIER_PRODUCT } from "./challengeThree"
import { flattenObject } from "./FlattenaDictionary"
import { getNumberOfIslands } from "./IslandCount"
import { longestCommonPrefix } from "./lc14"
import { addTwoNumbers } from "./lc2"
import { isValid } from "./lc20"
import { isAnagram } from "./lc242"
import { firstUniqChar } from "./lc387"
import { validIPAddress } from "./lc468"
import { groupAnagrams } from "./lc49"
import { distributeCandies } from "./lc575"
import { countSubstrings } from "./lc647"
import { nameMatch } from "./nameMatch"
import { longestPalindrome } from "./lc5"
import { climbStairs } from "./lc70"
import { minDistance } from "./lc72"
import { searchMatrix } from "./lc74"
import { numDistinct } from "./lc115"
import { rob } from "./lc198"
import { lengthOfLIS } from "./lc300"
import { longestPalindromeSubseq } from "./lc516"
import { superEggDrop } from "./lc887"
import { distributeCandiesTwo } from "./lc1103"
import { longestCommonSubsequence } from "./lc1143"
import { maxAlternatingSum } from "./lc1911"


export const AttemptExtra = {
  challengeOne: attempt,
  challengeTwo: decompressString,
  challengeThree: SUPPLIER_PRODUCT,
  flat: flattenObject,
  island: getNumberOfIslands,
  matchName: nameMatch,
  lc2: addTwoNumbers,
  lc5: longestPalindrome,
  lc14: longestCommonPrefix,
  lc20: isValid,
  lc49: groupAnagrams,
  lc70: climbStairs,
  lc72: minDistance,
  lc74: searchMatrix,
  lc115: numDistinct,
  lc198: rob,
  lc242: isAnagram,
  lc300: lengthOfLIS,
  lc387: firstUniqChar,
  lc468: validIPAddress,
  lc516: longestPalindromeSubseq,
  lc575: distributeCandies,
  lc647: countSubstrings,
  lc887: superEggDrop,
  lc1103: distributeCandiesTwo,
  lc1143: longestCommonSubsequence,
  lc1911: maxAlternatingSum

}


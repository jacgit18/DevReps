import { decompressString } from "./ChallengeTwo"
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
import { solution } from "./Challenge1_0"
import { SUPPLIER_PRODUCT } from "./challengeThree"


export const SolutionExtra = {
  challengeOne: solution,
  challengeTwo: decompressString,
  challengeThree: SUPPLIER_PRODUCT,
  flat: flattenObject,
  island: getNumberOfIslands,
  matchName: nameMatch,
  lc2: addTwoNumbers,
  lc14: longestCommonPrefix,
  lc20: isValid,
  lc49: groupAnagrams,
  lc242: isAnagram,
  lc387: firstUniqChar,
  lc468: validIPAddress,
  lc575: distributeCandies,
  lc647: countSubstrings,
}


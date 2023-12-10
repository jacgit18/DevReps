import { cyclic_sort } from "./cyclicSortEasy"
import { findKthPositive } from "./lc1539"
import { find_missing_number } from "./lc268"
import { findDuplicate } from "./lc287"
import { firstMissingPositive } from "./lc41"
import { findDuplicates } from "./lc442"
import { findDisappearedNumbers } from "./lc448"
import { findErrorNums } from "./lc645"

export const SolutionCycSort = {
  sort: cyclic_sort,
  lc41: firstMissingPositive,
  lc268: find_missing_number,
  lc287: findDuplicate,
  lc442: findDuplicates,
  lc448: findDisappearedNumbers,
  lc645: findErrorNums,
  lc1539: findKthPositive,
}

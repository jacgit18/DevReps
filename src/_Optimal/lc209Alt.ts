import { logg } from "../util/logger.js";

export function smallest_subarray_with_given_sum(target: number, nums: number[]): number {
    let start = 0;
    let end = 0;
    let sum = nums[0];
    let flag = false;
    let length = nums.length;
    let minLength = length;

    while (end < length) {
        if (sum >= target) {
            if (length > end - start + 1) {
                minLength = end - start + 1;
            }
            sum -= nums[start];
            flag = true;
            start++;
        } else {
            end++;
            if (end < length) {
                sum += nums[end];
            }
        }
    }

    if (!flag) {
        return 0;
    }

    return minLength;
}



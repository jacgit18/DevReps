"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smallest_subarray_with_given_sum = exports.logg = void 0;
const logg = (level, preMessage = "", postMessage = "", ...context) => {
    const logMessage = `${preMessage} ${level.toUpperCase()} ${postMessage}`;
    context.forEach((item, index) => {
        console.log(`Context ${index + 1}:`);
        console.log(item);
    });
    console.log(logMessage);
};
exports.logg = logg;
function smallest_subarray_with_given_sum(target, nums) {
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
        }
        else {
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
exports.smallest_subarray_with_given_sum = smallest_subarray_with_given_sum;
// logg(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1])}`, "Hi", "bye", ["test", 3, 53, true], "test2");
//# sourceMappingURL=lc209Alt.js.map
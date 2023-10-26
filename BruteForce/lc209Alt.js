var logg = function (level, preMessage, postMessage) {
    if (preMessage === void 0) { preMessage = ""; }
    if (postMessage === void 0) { postMessage = ""; }
    var context = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        context[_i - 3] = arguments[_i];
    }
    var logMessage = "".concat(preMessage, " ").concat(level.toUpperCase(), " ").concat(postMessage);
    context.forEach(function (item, index) {
        console.log("Context ".concat(index + 1, ":"));
        console.log(item);
    });
    console.log(logMessage);
};
function smallest_subarray_with_given_sum(target, nums) {
    var start = 0;
    var end = 0;
    var sum = nums[0];
    var flag = false;
    var length = nums.length;
    var minLength = length;
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
logg("Smallest subarray length: ".concat(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1])), "Hi", "bye", ["test", 3, 53, true], "test2");

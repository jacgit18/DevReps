export const logg = (level: string, preMessage: string = "", postMessage: string = "", ...context: any[]) => {
    const logMessage = `${preMessage} ${level.toUpperCase()} ${postMessage}`;

    context.forEach((item, index) => {
        console.log(`Context ${index + 1}:`);
        console.log(item);
    });

    console.log(logMessage);
};

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


logg(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1])}`, "Hi", "bye", ["test", 3, 53, true], "test2");

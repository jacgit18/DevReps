// import * as routes from './routers/index.js';




// // Function to execute TypeScript files
// function executeTSFiles(directory: string): void {
//   fs.readdir(directory, (err, files) => {
//     if (err) {
//       console.error(`Error reading directory: ${directory}`);
//       return;
//     }

//     files
//       .filter(file => file.endsWith('.ts'))
//       .forEach(file => {
//         const tsFilePath = path.join(directory, file);
//         const jsFilePath = tsFilePath.replace(/\.ts$/, '.js');
//         exec(`npx tsc ${tsFilePath}`, (error, stdout, stderr) => {
//           if (error) {
//             console.error(`Error compiling ${tsFilePath}: ${error.message}`);
//           } else {
//             console.log(`Compiled ${tsFilePath} to ${jsFilePath}`);
//             require(jsFilePath);
//           }
//         });
//       });
//   });
// }

// // Specify the directories to search for TypeScript files
// const directoriesToSearch: string[] = ['./_Optimal'];

// // Execute TypeScript files in specified directories
// directoriesToSearch.forEach(directory => {
//   executeTSFiles(directory);
// });


// routes.test.smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1])

// logg(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1])}`, "Hi", "bye", ["test", 3, 53, true], "test2");



 function smallest_subarray_with_given_sum(target: number, nums: number[]): number {
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

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1]));

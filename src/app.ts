import * as routes from "./routers/OptimalSolution"
// import { logg } from './util/logger.js';

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

// logg(`Smallest subarray length: ${routes.Optimal(7, [2, 1, 5, 2, 3, 1])}`, "Hi", "bye", ["test", 3, 53, true], "test2");

const app = routes.combinedSolutionExports.OptimalSlidingWindSolution.lc209

app(3, [4, 6, 6, 8])

// export default app

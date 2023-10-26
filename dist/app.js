"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes = __importStar(require("./routers/index.js"));
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
routes.test.smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1]);
// logg(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 1])}`, "Hi", "bye", ["test", 3, 53, true], "test2");
//# sourceMappingURL=app.js.map
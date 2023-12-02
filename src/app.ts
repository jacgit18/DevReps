import { AllAttempts } from "./Attempt"
import { AllSolution } from "./Solution"
import { customLog } from "./util/logger";
// readline-sync for user input
// import * as readlineSync from 'readline-sync'; 


// // Experiment
// // Function to display a list of available coding challenges
// const displayChallengeOptions = () => {
//   console.log('Available Coding Challenges:');
//   Object.keys(combinedOptimalSolutionExports.OptimalSlidingWindSolution).forEach((challenge, index) => {
//     console.log(`${index + 1}. ${challenge}`);
//   });
// };

// // Function to run the selected coding challenge
// const runSelectedChallenge = (challengeName: string) => {
//   const codingChallengeFunction = combinedOptimalSolutionExports.OptimalSlidingWindSolution.lc3
// //   combinedOptimalSolutionExports.OptimalSlidingWindSolution[challengeName];
//   if (codingChallengeFunction) {
//     const input = readlineSync.question('Enter input for the coding challenge: ');
//     const result = codingChallengeFunction(input);
//     console.log(`Result of ${challengeName}: ${result}`);
//   } else {
//     console.log('Invalid challenge name. Please choose a valid challenge.');
//   }
// };

// Main function to prompt the user and run the selected coding challenge
const main = () => {

//   displayChallengeOptions();
//   const selectedChallengeIndex = readlineSync.questionInt('Enter the number of the coding challenge to run: ');

//   const challengeNames = Object.keys(combinedOptimalSolutionExports.OptimalSlidingWindSolution);
//   const selectedChallengeName = challengeNames[selectedChallengeIndex - 1];

//   if (selectedChallengeName) {
//     runSelectedChallenge(selectedChallengeName);
//   } else {
//     console.log('Invalid challenge number. Please choose a valid challenge.');
//   }

// let test = SolutionExtra.lc20("()[]{}");
    let test = AllSolution.SolutionExtra;
    let test2 = AllAttempts.AttemptExtra;
    customLog("log", "Challenge:", test, "Solution")
    // console.log(test2)


// Usage examples:
// customLog("log", "Before:", "Hello", "After", "Additional Context")
// customLog('info', 'Info:', 'Some Information', 'Details', 'More Context');
// customLog('error', 'Error:', 'Something went wrong', 'Details', 'Error Context');


};

main();
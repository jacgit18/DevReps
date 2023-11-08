import * as Benchmark from 'benchmark';
import { OptimalTwoPointerAttempt } from "../../../../src/routers/OptimalAttempt";
import { OptimalTwoPointerSolution } from "../../../../src/routers/OptimalSolution";

  describe('Test suite for longest repeating character replacement Soluntion ', () => {
    let lc424: (s: string, num: number) => number;
    let lc424Alt: (s: string, num: number) => number;


    beforeEach(() =>{ 
      lc424 = OptimalTwoPointerSolution.lc424;
      lc424Alt = OptimalTwoPointerSolution.lc424alt;

    });

    it('should compare the speed of lc424 and lc424Alt', (done) => {
      // Define a benchmark suite
      const suite = new Benchmark.Suite();
    // Dont need to bench mark all the time only doing it for files with multiple approaches
      suite
        .add('lc424 Two pointer approach', () => {
          lc424("", 2);
        })
        .add('lc424 Sliding window approach', () => {
          lc424Alt("", 2);
        })
        .on('cycle', (event: Benchmark.Event) => {
          console.log(String(event.target)); // Print benchmark results
        })
        .on('complete', () => {
          console.log('Benchmark completed.'); // Benchmark suite completed
          done(); // Signal that the test is done
        })
        .run({ async: true }); // Run the benchmark asynchronously
  
      // You can add assertions here if needed
    }, 30000); // Increase the timeout to 10 seconds (adjust as needed)
  });
  
  
 


  describe('smallest_subarray_with_given_sum Attempt', () => {
    let lc424Attempt: (s: string, arr: number) => number;
  
    beforeEach(() => {
      lc424Attempt = OptimalTwoPointerAttempt.lc424;
    });
  
    it('should compare the output of lc209 and lc209Alt', () => {
      const result1 = lc424Attempt("", 2);
      // Call lc209Alt here if needed
  
      // Add assertions to compare the results of lc209 and lc209Alt
      expect(result1).toBe(2);
      // Add more assertions as needed
    });
  });
  
// benchmark-helper.ts
import Benchmark from 'benchmark';

class BenchmarkHelper {
  static benchmarkFunction(func: (s: number, arr: number[]) => number, input: number[]) {
    const suite = new Benchmark.Suite();
    suite.add('Function', () => {
      func(7, input);
    });
    suite.on('cycle', (event: Benchmark.Event) => {
      console.log(String(event.target));
    });
    suite.run();
  }
}

export default BenchmarkHelper;

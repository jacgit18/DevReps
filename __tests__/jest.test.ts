// Order of execution

  // Jest executes all describe handlers in a test file before it executes any of the actual tests.
  //  This is another reason to do setup and teardown inside before* and after* handlers rather
  //   than inside the describe blocks. Once the describe blocks are complete, by default Jest
  //   runs all the tests serially in the order they were encountered in the collection phase,
  //   waiting for each to finish and be tidied up before moving on.
describe('outer', () => {
    console.log('describe outer-a');

    describe('describe inner 1', () => {
      console.log('describe inner 1');
      test('test 1', () => {
        console.log('test for describe inner 1');
        expect(true).toEqual(true);
      });
    });

    console.log('describe outer-b');

    test('test 1', () => {
      console.log('test for describe outer');
      expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
      console.log('describe inner 2');
      test('test for describe inner 2', () => {
        console.log('test for describe inner 2');
        expect(true).toEqual(true);
      });
    });

    console.log('describe outer-c');
  });


//   If a test is failing, one of the first things to check should be
//    whether the test is failing when it's the only test that runs.
//     To run only one test with Jest, temporarily change that test command to a test.only:



test.only('this will be the only test that runs', () => {
    expect(true).toBe(true);
  });

  test('this test will not run', () => {
    expect('A').toBe('A');
  });



//   If you have a test that often fails when it's run as part of a larger suite,
//    but doesn't fail when you run it alone, it's a good bet that something from
//     a different test is interfering with this one. You can often fix this by
//     clearing some shared state with beforeEach. If you're not sure whether some
//     shared state is being modified, you can also try a beforeEach that logs data.

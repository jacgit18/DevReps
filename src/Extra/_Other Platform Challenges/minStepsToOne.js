// function minimumStepsToOne(num) {
//     // 
    
//     num === 1 ? console.log(num) 
//     : num < Math.min(num) ? console.log( num - 1) : minimumStepsToOne(num -1); 
    
 
    
    
    

// }


// Math.min(minimumStepsToOne(5)); 

function minStepsToOne(n) {
  
    function recurse(curr) {
      // Base case
      if(curr == 1) {
        return 0;
      }
      
      // Recursive relations
      // sub1
      let steps = recurse(curr-1);
      
      // divby2
      if(curr % 2 == 0) {
        let divby2 = recurse(curr/2);
        steps = Math.min(steps, divby2);
      }
      
      // divby3
      if(curr % 3 == 0) {
        let divby3 = recurse(curr/3);
        steps = Math.min(steps, divby3);
      }
      
      
      // return min # steps to 1 from `curr`
      return 1+steps;
      
    }
    
    let res = recurse(n);
    return res;
  }
  
  
  function minStepsToOneMemo(n) {
    let cache = {};
    
    function recurse(curr) {
      // Base case
      if(curr == 1) {
        return 0;
      }
      // Cache check
      if(curr in cache) {
        return cache[curr];
      }
      
      // Recursive relations
      // sub1
      let steps = recurse(curr-1);
      
      // divby2
      if(curr % 2 == 0) {
        let divby2 = recurse(curr/2);
        steps = Math.min(steps, divby2);
      }
      
      // divby3
      if(curr % 3 == 0) {
        let divby3 = recurse(curr/3);
        steps = Math.min(steps, divby3);
      }
      
      
      // return min # steps to 1 from `curr`
      let result = 1+steps;
      // Store result in cache
      cache[curr] = result;
      return result;
      
    }
    
    let res = recurse(n);
    // console.log(cache);
    return res;
  }
  
  function minStepsToOneTab(n) {
    // init array n+1 size
    let tab = new Array(n+1);
    
    // apply base case to table
    tab[1] = 0;
    
    // loop table filling in subproblem solutions
    for(let curr = 2; curr <= n; curr++) {
      // sub1
      let steps = tab[curr-1];
      
      // divby2
      if(curr % 2 == 0) {
        let divby2 = tab[curr/2];
        steps = Math.min(steps, divby2);
      }
      
      // divby3
      if(curr % 3 == 0) {
        let divby3 = tab[curr/3];
        steps = Math.min(steps, divby3);
      }
      
      
      // return min # steps to 1 from `curr`
      let result = 1+steps;
      // Store result in cache
      tab[curr] = result;
    }
    
    
    return tab[n];
    
    
  }
  
  // console.time("Brute Force Recursion: ");
  // console.log(minStepsToOne(10));
  // console.timeEnd("Brute Force Recursion: ");
  
  console.time("Memoization: ");
  console.log(minStepsToOneMemo(5678));
  console.timeEnd("Memoization: ");
  
  console.time("Tabulation: ");
  console.log(minStepsToOneTab(5678));
  console.timeEnd("Tabulation: ");
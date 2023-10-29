// You are given a string s and an array of strings words of the same length. 
// Return all starting indices of substring(s) in s that is a concatenation 
// of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.

/*
Identify Built in Functions(Array, String, Math) & Data Structure or Sorting Algorithms that can be Leveraged or ruled out as you render down problem


|  
V Identify I/O & Break down problem into English & Identify Constraints 10 min or less:

Initial Edgecase Param()





Return

|
V IDENTIFY EDGE to Identify TEST CASES in 10 min or less

Properties of Edgecase:





Alt EdgeCase & similarities:

		


|
V Define Naïve-Approach/Psuedocode on whiteboard under 20 min or less:

List out properties of problem you have gotten so far with order in mind:

Define Variables(to store reference manipulate) & Identify CRUD:


Identify Test Case with Control Flow in mind:


|
V Code if stuck check past steps & Identify Runtime & Optimizations 15 min or less




Control flow(Break, Continue) based on defined steps & edge cases

    Simple Test case: Rules:
     ---------------------------------------------
      new customer -> 15% off
      repeat customer -> 10% off
      coupon customer -> 30% off

     num of test case = num of rules = 2^num of conditions = 2^3 = 8 rules

     n = not likely p = probably
     Identify commonalities between test case
     Follow Discrete math De-Morgan's Law
     new cus T T T T F F F F
     repeat cus T T F F T T F F
     coupon cus T F T F T F T F
     result N N P P P N N

         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:


         Switch case()

}

*/

const log = (pre="", arg="", post="") => {console.log(`${pre} ${arg} ${post} `)}
const info = (pre="", arg="", post="") => {console.info(`${pre} ${arg} ${post} `)}
const warn = (pre="", arg="", post="") => {console.warn(`${pre} ${arg} ${post} `)}
const error = (pre="", arg="", post="") => {console.error(`${pre} ${arg} ${post} `)}
const table = (pre="", arg="", post="") => {console.table(`${pre} ${arg} ${post} `)}
const runTimeStart = (arg) => console.time(arg)
const runTimeEnd = (arg) => console.timeEnd(arg)


  const stringCat =(string) => {

  } 
 
  
runTimeStart("Runtime")
log("Edge case one", stringCat("barfoothefoobarman", ["foo","bar"])) // Expected I/O: [0,9]
log("Edge case two", stringCat("wordgoodgoodgoodbestword", ["word","good","best","word"])) // Expected I/O: []
log("Edge case three", stringCat("barfoofoobarthefoobarman", ["bar","foo","the"])) // Expected I/O: [6,9,12]
runTimeEnd("Runtime")














// const findSubstring = (letters, words) =>{

// let result = [];
// // console.log(letters.length)
// // let i = words[0].length -1 ;
// // console.log(i)

// // if(words[0].length){


// // for(i; i<letters.length; i+=1){
// //   // if(letters.length){

// //   // }
    
// //   console.log(letters[i],i);
// //   let j =0;
// //   j++;

// //   if(words[0].endsWith(letters[i])){
// //     i+= 3
// //     // console.log(letters[i], "test")

// //   } else {
// //     j++;

// //   }
// //   if(words[j].endsWith(letters[i])){
// //     i+=3
// //   }
// // }
// // }
//   // return [letters.length, words[0].length]
// let ArrayOne = [];
// let ArrayTwo = [];

//   for(let i=0; i<words.length-1; ++i){
//     let last = words[i - 1]
//     let currNext = words[i+1];

//     // let currWord = words[i].concat(words[i+1]);
//     // let nextWord = words[i+1].concat(words[i])    

//     if(last !== undefined && currNext !== undefined){
//       let first = words[i].concat(currNext).concat(last);
//       // let firstsec = words[i].concat(last).concat(currNext);

//       let sec = currNext.concat(words[i]).concat(last);
//       let third = last.concat(words[i]).concat(currNext);


//       ArrayOne.push(first,sec, third)

      
//     }
//     // else{
//     //   ArrayOne.push()

//     // }

  

//     // console.log(words.length)
//     // if(words.length -1 === 2){
//     //   let last = words[i - 1]
//     //   let currWord2 = words[i].concat(words[i+1]);
//     // let nextWord2 = words[i+1].concat(words[i])   
     
//     // }

  
//   //   let temp = words[i]   
//   //   let tempNext = words[i+1]
//   //  ArrayOne.push(tempNext.concat(temp))



//     // console.log(ArrayOne)

//   }

//   return ArrayOne

//   }
  
  var findSubstring = function(s, words) {
    
    let res = [];

    let wordLength = words[0].length;
    let wordCount = words.length;
    let len = wordCount * wordLength; //Length of sliding window
    
    let map = {}
    
    for (let word of words) map[word] = map[word] + 1 || 1; //Hash word freq

  	for (let i = 0; i < s.length - len + 1; i++) {
            let sub = s.slice(i, i + len); //Generate substring of sliding window length
            if (isConcat(sub, map, wordLength)) res.push(i)
        }
    
    return res;
};

function isConcat(sub,map,wordLength){
    
    let seen = {};
    for (let i = 0; i < sub.length; i+=wordLength) {
        let word = sub.slice(i,i + wordLength);
        seen[word] = seen[word] + 1 || 1
    }
    
    for(let key in map){
        if(map[key] !== seen[key]) return false; //Word freq must match between map and seen
    }
    return true;
}


  console.time("Sliding")
  // console.log(findSubstring("barfoothefoobarman", ["foo","bar"])) // [0,9]
  // console.log(findSubstring("wordgoodgoodgoodbestword",  ["word","good","best","word"])) // []
  // console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])) // [6,9,12]

  console.timeEnd("Sliding")
  
  
  // console.time("Pointer")
  // console.log(findSubstring(s, words))

  // console.timeEnd("Pointer")
  
  
  try {
    module.exports = findSubstring;
  } catch (error) {}
  
  
  
 
  
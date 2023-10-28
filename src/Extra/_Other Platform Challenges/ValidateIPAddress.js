/*

Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

Examples:

ip = '192.168.0.1'
output: true

ip = '0.0.0.0'
output: true

ip = '123.24.59.99'
output: true

ip = '192.168.123.456'
output: false

Identify Built in Functions(Array, String, Math) & Data Structure or Sorting Algorithms that can be Leveraged or ruled out as you render down problem and Prioritize VISUAL THINKING OVERALL especially before writing


|  
V Identify I/O & Break down problem into English & Identify Constraints 10 min or less:

Initial Edgecase Param()




Return



|
V Define Naïve-Approach/Psuedocode on whiteboard under 20 min or less:

List out properties of problem you have gotten so far with order in mind:

Define Variables(to store reference manipulate) & Identify CRUD:


Identify Test Case with Control Flow in mind:


|
V IDENTIFY EDGE to Identify TEST CASES in 10 min or less

Properties of Edgecase:





Alt EdgeCase & similarities:

		


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


function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/
//nst set = new Set(ip)
//nsole.log(set)
  
  // number of peiods 4 nums before and after the periods need to be less then or equal 3
  let count = 0;
  for(let current = 0;  current < ip.length; ++current){
    
    console.log(ip[current])
    
    if(ip[current] === "."){
      ++count
          if(count === 3 && ){
      return true
      
    }
      
    }
    
    /**
  if where at a period check index value greater 3   
**/
    
  }

  
  
  
}

console.log(validateIP('192.168.0.1'))
//nsole.log(validateIP('0.0.0.0'))
//nsole.log(validateIP('123.24.59.99'))
//nsole.log(validateIP('192.168.123.456'))
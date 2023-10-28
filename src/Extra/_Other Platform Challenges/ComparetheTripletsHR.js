let AliceScore = [5, 6, 7];
let BobScore = [3, 6, 10];

function compareTriplets(a, b) {
   
    let aliceTotal = 0; 
    let bobTotal = 0;
// add condition that checks array length and pick the longer array to iterate through

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceTotal++;
        } else if (a[i] < b[i]) {
            bobTotal++;
        } else {
            continue;
        }
        
    }
    return console.log([aliceTotal, bobTotal])
}



compareTriplets(AliceScore,BobScore);


// function compareTriplets(a, b) {
   
//     let aliceTotal = 0; 
//     let bobTotal = 0;
// // add condition that checks array length and pick the longer array to iterate through

//     for (let i = 0; i < a.length; i++) {
//        return a[i] > b[i] ? console.log(aliceTotal++):
//         a[i] < b[i] ? console.log(bobTotal++): true
//         }
    
// }



// compareTriplets(AliceScore,BobScore);





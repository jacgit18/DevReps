// function getDifferentNumber(arr):
//     n = arr.length

//     set = new Set() # the Set interface is language dependent
//     for i from 0 to n-1:
//         set.insert([arr[i]]) # build the set

//     for i from 0 to n - 1:
//         if (set.find(i) == false):
//             return i

//     # we got here since every number from 0 to n-1 is in arr.
//     # By definition then, n isn’t in arr. Otherwise, the size of arr
//     # would have been n+1 and not n.
//     return n


const getDifferentNumber =(arr) =>{
    let len = arr.length;
    let Unique = new Set()

    for(let i=0; i<len -1; ++i){
        Unique.add([arr[i]]);
    }

    for(let j=0; j<len -1; ++j){
        if(!Unique.has(arr[j]) === false){
            return j
        }
    }

    return len
}


console.log(getDifferentNumber([0, 1, 2, 3]))



const deepClone = (obj) =>{
    if (typeof obj !== "object" || obj === null) return obj
    
    // create array or object to hold values
    const newObj = Array.isArray(obj) ? [] : {}
    
    for(let key in obj){
    const value = obj[key]
    // recursive call for nested objects & arrays
    newObj[key] = deepClone(value)
    
    }
    return newObj
    
    }
    
    testArray = [44,22]
    const newA = deepClone(testArray)
    testArray === newA //false good
    testArray.push(1)
    newA.push(8)
    console.log(newA)
    console.log(testArray === newA )
    console.log(testArray)

    
    testObj  = {
    "first": 44,
    "sec": 12,
    "third": {"a": 1, "b": 2}
    }
    const objay = deepClone(testObj)
    objay === testObj //false good


    var arr = Array.from(Array(10).keys())

console.log(arr)




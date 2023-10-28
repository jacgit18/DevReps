const dict = require("./dict");
// import dict from './dict'; ??


// function RecflattenDictionary(dict, emptyString, map){
//   for (let prop in dict){
    
//      let value = prop

//         if (!dict(value)):
//             if (initialKey == null || initialKey == ""):
//                 flatDictionary.put(key, value)
//             else:
//                 flatDictionary.put(initialKey + "." + key, value)
//         else:
//             if (initialKey == null || initialKey == "")
//                 flattenDictionaryHelper(key, value, flatDictionary)
//             else:
//                 flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary)
//   }
      
  
  
// }

function RecflattenDictionary(dict, emptyString, map) {
  let itersection = ".";

  for (let prop in dict) {
    let value =  dict[prop];
    let dataType = typeof(value);

    if(dataType == 'boolean' || dataType == 'number' || dataType == 'string' || dataType == 'object' ){
       if(emptyString == null || emptyString == ""){
      map.set(prop, value)
    }else{
      map.set(emptyString + itersection + prop, value)

    }
    // console.log(map)
      
    } else{
          if(emptyString == null || emptyString == "") {
      // console.log(prop + "." )
      // console.log(prop + "." )

      RecflattenDictionary(value, prop, map);

    }

    else{
      RecflattenDictionary(emptyString + itersection + prop, value, map)

    }
    }


  }

    // return map
}

function flattenDictionary(dict) {
  let emptyString = "";
  let map = new Map;
  RecflattenDictionary(dict, emptyString, map);
  return map
}

// flattenDictionary(dict);
console.log(flattenDictionary(dict));

//   output: {
//     "Key1" : "1",
//     "Key2.a" : "2",
//     "Key2.b" : "3",
//     "Key2.c.d" : "3",
//     "Key2.c.e" : "1"
// }

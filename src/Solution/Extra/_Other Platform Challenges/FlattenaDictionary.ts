interface Diction {
  [key: string]: boolean | number | string | Diction;
}

const dict: Diction = require("./dict");

function RecflattenDictionary(dict: Diction, prefix: string, map: Map<string, boolean | number | string | Diction>): void {
  const itersection = ".";

  for (const prop in dict) {
    const value = dict[prop];
    const dataType = typeof value;

    if (dataType === "boolean" || dataType === "number" || dataType === "string" || dataType === "object") {
      const key = prefix ? prefix + itersection + prop : prop;
      map.set(key, value);
    } else {
      const newPrefix = prefix ? prefix + itersection + prop : prop;
      RecflattenDictionary(value as Diction, newPrefix, map);
    }
  }
}

export const flattenDiction = (dict: Diction): Map<string, boolean | number | string | Diction> =>{
  const map = new Map<string, boolean | number | string | Diction>();
  RecflattenDictionary(dict, "", map);
  return map;
}

console.log(flattenDiction(dict));


//   output: {
//     "Key1" : "1",
//     "Key2.a" : "2",
//     "Key2.b" : "3",
//     "Key2.c.d" : "3",
//     "Key2.c.e" : "1"
// }

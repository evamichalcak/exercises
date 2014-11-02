function deepEqual(elem1, elem2) {
    if ((typeof elem1 == "object" && elem1 != null) && (typeof elem2 == "object" && elem2 != null) && (Object.keys(elem1).length == Object.keys(elem2).length)) {
        if (Object.keys(elem1).length > 0) {
            for (var prop in elem1) {  
                if (elem1[prop] == "undefined") {
                    return (((typeof elem2) =="object") && (elem2[prop] == "undefined"));
                }
                return deepEqual(elem1[prop], elem2[prop]);                
            }
        } else {
            return true;
        }
    } else {
        return (elem1 === elem2);
    } 
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true
console.log(deepEqual({}, {}));
console.log(deepEqual(5, 5));
console.log(deepEqual("{}", {}));
console.log(deepEqual(null, {}));





/////////////////////////////////////////////////////////
//////////////corrected version:
/////////////////////////////////////////////////////////

function deepEqual(elem1, elem2) {
  if (elem1 === elem2) return true;
  
  if (elem1 == null || typeof elem1 != "object" || elem2 == null || typeof elem2 != "object") {
    return false;
  }
  
  if (Object.keys(elem1).length != 0) { 
      for (var prop in elem1) {
          if (!(prop in elem2) || !deepEqual(elem1[prop], elem2[prop])) {
              return false;
          }
      }
  } 
  return Object.keys(elem1).length === Object.keys(elem2).length;

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true
console.log(deepEqual({}, {}));
console.log(deepEqual(5, 5));
console.log(deepEqual("{}", {}));
console.log(deepEqual(null, {}));
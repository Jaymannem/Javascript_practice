const nestedArray = [1, [2, 3], [4, [5, 6]]];

// 1. using flat() method
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray); // [ 1, 2, 3, 4, 5, 6 ]

// 2. using recusrive approach

function flatteningArray(arr) {
  let result = [];

  function arrayFlat(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        arrayFlat(element[i]);
      }
    } else {
      result.push(element);
    }
  }

  arrayFlat(arr);
  return result
}
console.log(flatteningArray(nestedArray));

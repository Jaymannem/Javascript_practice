// 1. using length = 0 
const array = [1, 2, 3, 4, 5];
array.length = 0;
console.log(array); // []


// 2. using []
let array1 = [1, 2, 3, 4, 5];
array1 = [];
console.log(array1); // []


// 3. using splice
let array2 = [1, 2, 3, 4, 5];
array2.splice(0, array2.length);
console.log(array2); // []


// 4. using pop 
let array4 = [1, 2, 3, 4, 5];
while(array4.length > 0) {
    array4.pop()
}
console.log(array4);  // []
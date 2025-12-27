// 1. using for loop

let start = 1; 
let end = 7;

function createArray1(num1,num2) {
    let result = [];
    for(let i=num1; i<= num2; i++) {
        result.push(i)
    }
    return result;
}

console.log(createArray1(start, end)); // [1, 2, 3, 4, 5, 6, 7]

// 2. using Array.of();
const arr = Array.of(1,2,3,4,5,6,7);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]


// 3. using Array.from 
const arr1 = Array.from({length: 7}, (_, i)=> i+1);
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
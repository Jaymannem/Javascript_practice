const input = [2, 4, 6, 9, 3];

// 1. using Math.max 
function findLargestNum1(arr) {
    return Math.max(...arr)
}
console.log(findLargestNum1(input)); // 9


// 2. using for of 
function findLargestNum2(arr) {
    let max = arr[0]
    for(let num of arr) {
        if(num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findLargestNum2(input)); // 9


// 3. using reduce
function findLargestNum3(arr) {
    return arr.reduce((current, largest)=> current > largest ? current : largest, arr[0])
}
console.log(findLargestNum3(input)); // 9


// 4. using for loop
function findLargestNum4(arr) {
    let largestNum = arr[0];

    for(let i=1; i< arr.length; i++) {
        if(arr[i] > largestNum) {
            largestNum = arr[i]
        }
    }
    return largestNum;
}
console.log(findLargestNum4(input)); // 9
const input = [10, 20, 30];

// 1. using for loop 
function findSum(nums) {
    let result = 0; 

    for(let i=0; i< nums.length; i++) {
        result =  nums[i] + result
    }
    return result;
}
console.log(findSum(input)); // 60


// 2. using reduce method
function findSum1(nums) {
    return nums.reduce((current, sum) => current + sum, 0)
}

console.log(findSum1(input)); // 60


// 3. using for of
function findSum2(nums) {
    let total = 0;
    for(let num of nums) {
        total = total + num;
    }
    return total;
}
console.log(findSum2(input)); // 60
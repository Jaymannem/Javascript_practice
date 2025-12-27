const arr = [1, 2, 2, 3, 4, 4, 5]

// 1. using Set and Spread Operator 
const result = [...new Set(arr)];
console.log(result) // [ 1, 2, 3, 4, 5 ]

// 2. using filter and indexOf
const unique = arr.filter((item, index)=> arr.indexOf(item) === index);
console.log(unique) // [ 1, 2, 3, 4, 5 ]


// 3. using forEach and includes()

const output = [];
arr.forEach(element => {
    if(!output.includes(element)) {
        output.push(element)
    }
});
console.log(output) // [ 1, 2, 3, 4, 5 ]


// 4. using for of and includes

const result1 = [];
for(let element of arr) {
    if(!result1.includes(element)) {
        result1.push(element)
    }
}
console.log(result1) // [ 1, 2, 3, 4, 5 ]


// 5. using reduce and includes
let uniqueValues = arr.reduce((curr, acc)=> {
    if(!curr.includes(acc)){
        curr.push(acc)
    }
    return curr;
},[])
console.log(uniqueValues); // [ 1, 2, 3, 4, 5 ]


// 6. using for of and indexOf
let uniqueElements = [];
for(let nums of arr) {
    if(uniqueElements.indexOf(nums) === -1) {
        uniqueElements.push(nums)
    }
}
console.log(uniqueElements); // [ 1, 2, 3, 4, 5 ]
 
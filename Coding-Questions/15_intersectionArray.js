const input1 = [1, 2, 3];
const input2 = [2, 3, 4];

// 1. using Set Method
function findCommonValues(arr1, arr2) {
    const set2 = new Set(arr2);

    return arr1.filter(value => set2.has(value))
}

console.log(findCommonValues(input1, input2)); // [ 2, 3 ]


// using filter and includes methods
function findCommonValues2() {
    return input1.filter(element => input2.includes(element));
}
console.log(findCommonValues2()); // [ 2, 3 ]


// using for loop
function findCommonValues3(arr1, arr2) {
    let output = [];
    for(let i=0; i< arr1.length; i++) {
        for(let j=0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                output.push(arr1[i])
            }
        }
    }
    return output
}

console.log(findCommonValues3(input1, input2)); // [ 2, 3 ]


// using set method 
function findCommonValues4(arr1, arr2) {
    let result = [];

    const S1 = new Set(arr1);
    const S2 = new Set(arr2);

    for(let element of S1) {
        if(S2.has(element)) {
            result.push(element)
        }
    }

    return result;
}

console.log(findCommonValues4(input1, input2)); // [ 2, 3 ]


// using reduce 
const intersection = input1.reduce((acc, curr)=> {
    if(input2.includes(curr)) {
        acc.push(curr)
    };
    return acc;
}, []);
console.log(intersection); // [ 2, 3 ]
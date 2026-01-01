// 1. function as an argument
const numbers = [1, 2, 3, 4, 5];

const evenNums = numbers.filter(num => num %2 == 0);

console.log(evenNums); // [ 2, 4 ]


// 2. return a function
function Counter(count) {
    console.log(count); 
}

Counter(5)
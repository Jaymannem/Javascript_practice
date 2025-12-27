// 1. using split(), reverse and join() 
const input = "hello     world";

function reverseWords1(text) {
    return text.split(" ").reverse().join(' ')
}
console.log(reverseWords1(input)) // world hello


// 2. using destructuring

const [a, b] = input.split(" ");
const output = `${b} ${a}`;
console.log(output); // world hello


// 1. using for loop
function reverseString1(str) {
    let result = "";
    for(let i = str.length-1; i>=0; i--){
        result = result + str[i]
    }
    return result
}

console.log(reverseString1('hello')) // olleh


// 2. Using split(""), reverse() and join()

function reverseString2(str) {
    return str.split("").reverse().join('')
}
console.log(reverseString2('hello'));  // olleh


// 3. using reduce() method
function reverseString3(str) {
    return str.split("").reduce((current, reversed)=> reversed + current, "")
}
console.log(reverseString3("hello")) // olleh


// 3. using spread operator 

const s = "A🙂B";
const reversed = [...s].reverse().join('');
console.log(reversed)


// 4. using for of loop
function reverseString4(str) {
 let output = "";
 for(let char of str) {
    output = char + output;
 }
 return output;
}
console.log(reverseString4("hello")) // olleh
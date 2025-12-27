
// 1. using for of
let vowels = "aeiou";
function removeVowels(str) {
    let result = ""
    for(let char of str) {
        if(!vowels.includes(char)) {
            result = result + char
        }
    }
    return result
}
console.log(removeVowels('hello'));


// 2. using filter method
function removeVowels1(text) {
    return text.split("").filter(element => !vowels.includes(element)).join('')
}
console.log(removeVowels1('test')); // tst


// 3. using reducer
function removeVowels2(text) {
    const result = text.split("").reduce((acc, curr) => {
        if(!vowels.includes(curr)) {
            acc = acc + curr
        }
        return acc
    }, "")
    return result
}
console.log(removeVowels2('world')); // wrld


// 4. using for loop
function removeVowel3(text) {
    let result = ""
    for(let i=0; i<text.length; i++) {
        if(!vowels.includes(text[i])) {
            result = result + text[i]
        }
    }
    return result;
}
console.log(removeVowel3("javascript")); // jvscrpt
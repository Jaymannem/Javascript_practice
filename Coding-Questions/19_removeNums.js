const input = "a1b2c3";

function removeNumbers(text) {
    let result = "";
    let str = text.split("")
    for(let word of str) {
        if(isNaN(word)) {
            result = result + word
        }
    }
    return result
}

console.log(removeNumbers(input));


const output = input.split("").filter(char => isNaN(char)).join('')
console.log(output)
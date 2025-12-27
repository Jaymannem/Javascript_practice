const input = "this is jay mannem"

// 1. using for of 
function getCapitalize(text) {
    const words = text.split(" ");
    let result = [];
    for(let word of words) {
        let capitalize = word.charAt(0).toUpperCase() + word.substr(1)
        result.push(capitalize)
    }
    return result.join(" ")
}

console.log(getCapitalize(input));  // This Is Jay Mannem
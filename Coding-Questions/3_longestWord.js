const input = "welcome to javascript coding";

// 1. using for of
function findLongest1(text) {
    const words = text.split(" ");
    
    let longestWord = "";
    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}
console.log(findLongest1(input)) // javascript


// 2. using for loop
function findLongest2(text) {
    const words = text.split(" ");
    let longestWord = "";

    for(let i = 0; i< words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord
}
console.log(findLongest2(input)) // javascript

// 3. using reduce method
function findLongest3(text) {
    const words = text.split(" ");
    return words.reduce((current, longest) => current.length > longest.length ? current : longest, "")
}
console.log(findLongest3(input)) // javascript


// 4. using filter
function findLongest4(text) {
    const words = text.split(" ");
   
    const wordsLength = words.map(word => word.length); // [ 7, 2, 10, 6 ]
    const maxLength = Math.max(...wordsLength); // 10 
    
    const longestWord = words.filter(word => word.length === maxLength); // [ 'javascript' ]
    return longestWord[0]
    
}
console.log(findLongest4(input))

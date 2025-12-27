const input = "hello javascript";
const vowels = "aeiou";

// 1. using regex 
function findVowels1(str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

console.log(findVowels1(input)) // 5


// 2. using includes 
function findVowels2(str) {
    let count = 0;
    for(let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(findVowels2(input));  // 5


// 3. using filter method
function findVowels3(str) {
  let count = 0;
  let vowles = "aeiou";
  let words = str.split("");

  return words.filter(char => vowels.includes(char)).length;
}
console.log(findVowels3(input)); // 5

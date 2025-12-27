const palidromeText = "madam";
const nonPalidromeText = "hello";

// 1. using split, reverse and join methods
function isPalindrome1(text) {
    const reversedText = text.split("").reverse().join("");
    return reversedText === text
}
console.log(isPalindrome1(palidromeText)) // true
console.log(isPalindrome1(nonPalidromeText)) // false


// 2. using for loop
function isPalindrome2(text) {
    const len = text.length;
    for(let i=0; i<len/2; i++) {
        if(text[i] !== text[len-1-i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome2(palidromeText)) // true
console.log(isPalindrome2(nonPalidromeText)) // false


// 3. By reversing the string 
function isPalindrome3(str) {
    let reverseStr = "";

    for(let i = str.length-1; i>=0; i--) {
        reverseStr = reverseStr + str[i]
    }

    if(reverseStr === str) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome3(palidromeText)) // true
console.log(isPalindrome3(nonPalidromeText)) // false


// 4. Array.every()
function isPalindrome4(str) {
    const words = str.split("")
    return words.every((char, index)=> char === str[str.length - index - 1])
}

console.log(isPalindrome4(palidromeText)) // true
console.log(isPalindrome4(nonPalidromeText)) // false


// 5. using two pointer 
function isPalindrome5(text) {
    let left = 0; 
    let right = text.length - 1;

    while(left < right) {
        if(text[left] !== text[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome5("madam")) // true
console.log(isPalindrome5("love")) // false
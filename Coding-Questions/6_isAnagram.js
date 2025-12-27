const input1 = "listen";
const input2 = "silent";

// 1. Using split, sort and join methods
function isAnagram1(str1, str2) {
    const sortStr1 = str1.split('').sort().join(''); // eilnst
    const sortStr2 = str2.split('').sort().join(''); // eilnst
    return sortStr1 === sortStr2
};
console.log(isAnagram1(input1, input2)) // true

// 2. using frequency counter
function isAnagram2(str1, str2) {
    const str1Length = str1.length;
    const str2Length = str2.length;

    if(str1Length !== str2Length) {
        return false
    }

    let count1 = {};
    let count2 = {};

    for(let text1 of str1) {
        count1[text1] = (count1[text1] || 0) + 1;
    }

    for(let text2 of str2) {
        count2[text2] = (count2[text2] || 0) + 1;
    }

    console.log(count1); // { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }
    console.log(count2); // { s: 1, i: 1, l: 1, e: 1, n: 1, t: 1 }

    for(let key in count1) {
        if(count2[key] !== count1[key]) {
            return false
        }
    }
    return true;
}
console.log(isAnagram2(input1, input2)) // true


// 3. using frequency counter
function areAnagrams(str1, str2) {
    if(str1.length !== str2.length) return false;

    let charCount = {};

    for(let text1 of str1) {
        charCount[text1] = (charCount[text1] || 0) + 1;
    }

    for(let text2 of str2) {
        charCount[text2] = (charCount[text2] || 0) - 1
    };

    for(let key in charCount) {
        if(charCount[key] !== 0) {
            return false
        }
    }
    return true
}
console.log(areAnagrams(input1, input2)); // true
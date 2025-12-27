const input = "jaya";
const char = "a";

function getOccurancesCount(text, char) {
    let count = 0;

    for(let i=0; i<text.length; i++) {
        if(text[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(getOccurancesCount(input, char)); // 2
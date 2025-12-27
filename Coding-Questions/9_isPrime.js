const input1 = 7;
const input2 = 12;

function isPrime(num) {
    for(let i=2; i <= num/2; i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true;
}
console.log(isPrime(input1)); // true
console.log(isPrime(input2)); // false


// way 2
function isPrime1(num) {
    let isPrime = true;
    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            isPrime = false
        }
    }
    return isPrime
}
console.log(isPrime1(input1))
console.log(isPrime1(input2))


// find prime numbers between 100 to 200
let start = 100;
let end = 200;

function isPrime2(num) {
    for(let i=2; i< num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimesInRange(num1, num2) {
    let primeNumbers = [];
    for(let i = num1; i<= num2; i++) {
        if(isPrime2(i)) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers;
}
console.log(findPrimesInRange(start, end))
function findFactorial1(num) {
    if(num === 0) {
        return 1;
    }

    let factorial = 1;

    for(let i=1; i<=num; i++) {
        factorial *= i
    }
    return factorial;
}

console.log(findFactorial1(5)); // 120

function findFactorial2(num) {
    if(num === 0 || num === 1) {
        return 1
    } else {
        return num * findFactorial2(num-1)
    }
}
console.log(findFactorial2(5)); // 120
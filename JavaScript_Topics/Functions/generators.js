function* getNumbers(n) {
    let i=0; 
    while(i < n) {
        yield i; 
        i++;
    }
}

const gen = getNumbers(3);

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined


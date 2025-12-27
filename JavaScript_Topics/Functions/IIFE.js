(function() {
    console.log("IIFE Function") // Executes immediately
})();


// Example 1: 
var counter = (function() {
    var count = 0;

    return {
        increment: () => {
            count++;
        }, 

        decrement: () => {
            count--;
        },

        getCount: function() {
            return count;
        }
    }
})();

console.log(counter.getCount()); // 0
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // 3

counter.decrement();
console.log(counter.getCount()); // 2

console.log(counter.count); // undefined (can't access private variables)


let input = [1,2,3,4,5,6,7,8,9,10]
let size = 3;

var chunk = function(arr, size) {
    let finalResult = [];
    let subArray = [];

    for(let i=0; i< arr.length; i++) {
        subArray.push(arr[i]);

        if(subArray.length === size) {
            finalResult.push(subArray);
            subArray = [];
        }
    }
    
    if(subArray.length) {
        finalResult.push(subArray)
    }

    return finalResult
};

console.log(chunk(input, size)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
for(var i=1; i<=3; i++) {
    setTimeout(()=> {
        console.log(i); // 4 4 4 
    }, 1000)
}

// How to fit the above issue? 

// Way 1: Use let keyword instead of var keyowrd
for(let i=1; i<=3; i++) {
    setTimeout(() => {
        console.log(i); // 1 2 3
    }, 1000);
}


// Way 2: Use IIFE 
for(var i=1; i<=3; i++) {
    (function(i) {
        setTimeout(()=> {
            console.log(i); // 1 2 3
        }, 1000)
    })(i)
}

// Way 3: Pass i directly to setTimeout
for(var i=1; i<=3; i++) {
    setTimeout((i)=> {
        console.log(i); // 1 2 3
    }, 1000, i)
}
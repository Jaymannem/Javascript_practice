function Person() {
    this.age = 28;
    
    setTimeout(()=> {
        console.log(this.age)  // -----> 28
    }, 1000)
}

Person()


function Person1() {
    this.age = 28;

    setTimeout(function() {
        console.log(this.age) // ----> undefined
    }, 1000)
}

Person1();


// If we want to fix it with named function. 

// Way 1:  use self keyword, stores this in variable

function Person2() {
    this.age =28;
    const self = this;

    setTimeout(function() {
        console.log(self.age); // ----> 28
    }, 1000)
}

Person2();


// way 2: using bind
function Person3() {
    this.age = 28;

    setTimeout(function() {
        console.log(this.age); // ----> 28
    }.bind(this), 1000)
}

Person3();
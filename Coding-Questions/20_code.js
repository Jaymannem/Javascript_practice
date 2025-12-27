let obj = {
    name: "jaya",
    show() {
        setTimeout(function() {
            console.log(this.name)
        })
    }
};

obj.show()
const Throttle = require("./throttle");

function onScroll() {
    console.log("Scroll event triggered")
}

const throttledScroll = Throttle(onScroll, 1000);
throttledScroll();
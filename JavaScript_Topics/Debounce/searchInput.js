const debounce = require("./debounce");

function searchInput() {
    console.log("API called")
};

const debouncedSearch = debounce(searchInput, 1500);
debouncedSearch();
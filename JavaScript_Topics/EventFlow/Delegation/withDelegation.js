
let count = 0;

function render() {
  document.getElementById("count").textContent = String(count);
}

// ONE listener on the parent container (delegation)
document.getElementById("controls").addEventListener("click", (e) => {
  // Guard: respond only if a button was clicked
  if (e.target.tagName !== "BUTTON") return;

  const action = e.target.getAttribute("data-action");
  if (action === "inc") {
    count += 1;
    console.log("Increment clicked (delegation)");
  } else if (action === "dec") {
    count -= 1;
    console.log("Decrement clicked (delegation)");
  }
  render();
});

// Initial render
render();

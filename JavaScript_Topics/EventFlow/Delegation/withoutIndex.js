
// Simple counter state
let count = 0;

// Update UI
function render() {
  document.getElementById("count").textContent = String(count);
}

// Attach listeners to EACH button directly (no delegation)
document.getElementById("inc").addEventListener("click", () => {
  count += 1;
  render();
  console.log("Increment clicked (no delegation)");
});

document.getElementById("dec").addEventListener("click", () => {
  count -= 1;
  render();
  console.log("Decrement clicked (no delegation)");
});

// Initial render
render();

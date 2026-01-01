
// Parent bubbling listener
document.getElementById("parent").addEventListener("click", (e) => {
  console.log("PARENT handler");
});

// Child bubbling listener
document.getElementById("child").addEventListener("click", (e) => {
  console.log("CHILD handler (TARGET)");
});

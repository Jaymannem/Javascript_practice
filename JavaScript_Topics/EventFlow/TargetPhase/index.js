// Parent listener
document.getElementById("parent").addEventListener("click", (e) => {
  console.log("PARENT handler");
  console.log("eventPhase:", e.eventPhase);
  console.log("target:", e.target.id);
  console.log("currentTarget:", e.currentTarget.id);
  console.log("-----");
});

// Child listener
document.getElementById("child").addEventListener("click", (e) => {
  console.log("CHILD handler (TARGET PHASE)");
  console.log("eventPhase:", e.eventPhase);
  console.log("target:", e.target.id);
  console.log("currentTarget:", e.currentTarget.id);
  console.log("-----");
});

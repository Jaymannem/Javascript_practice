
document.getElementById("parent").addEventListener(
  "click",
  () => console.log("Parent - Capturing"),
  true 
);

document.getElementById("child").addEventListener(
  "click",
  () => console.log("Child - Capturing"),
  true
);

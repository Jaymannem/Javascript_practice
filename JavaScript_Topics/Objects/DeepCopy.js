const original = {
  name: "Jaya",
  skills: {
    primary: "JavaScript",
    secondary: "React"
  }
};

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.name = "jaswik"
deepCopy.skills.primary = "Node.js";

console.log(original.name); // Jaya
console.log(original.skills.primary); // "JavaScript" ✅

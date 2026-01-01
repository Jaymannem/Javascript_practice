
const original = {
  name: "Jaya",
  skills: {
    primary: "JavaScript",
    secondary: "React"
  }
};

// Shallow copy
const shallowCopy = { ...original };

shallowCopy.name = "Jaswik";
shallowCopy.skills.primary = "Node.js";

console.log(original.name);             // "Jaya"
console.log(original.skills.primary);   // "Node.js"

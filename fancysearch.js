const fs = require("fs");

const filename = process.argv[2];
const searchWord = process.argv[3];
const numberOfLines = Number(process.argv[4]);

if (process.argv.length !== 5) {
  console.log("Usage: node fancysearch.js <filename> <searchWord> <numberOfLines>");
  process.exit();
}

if (!fs.existsSync(filename)) {
  console.log("Error: File could not be found.");
  process.exit();
}

const fileContents = fs.readFileSync(filename, "utf8");
const lines = fileContents.split("\n");

const matchingLines = lines.filter((line) =>
  line.toLowerCase().includes(searchWord.toLowerCase())
);

if (matchingLines.length === 0) {
  console.log("No matching lines found.");
} else {
  const firstMatches = matchingLines.slice(0, numberOfLines);
  console.log(firstMatches.join("\n"));
}

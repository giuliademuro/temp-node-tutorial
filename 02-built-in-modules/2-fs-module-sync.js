//Fs module(Sync)
const { readFileSync, writeFileSync } = require("fs");
console.log("Start!");
const first = readFileSync("./content/first.txt", "utf8"); //Cerca il percorso a partire dalla directory radice
const second = readFileSync("./content/text.txt", "utf8"); //Cerca il percorso a partire dalla directory radice
console.log(first, second);

writeFileSync(
  //Se il file non esiste, lo crea
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" } //append
);

console.log("Task done!");
console.log("Starting next task...");

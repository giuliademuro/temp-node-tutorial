// Modulo fs asincrono

const { readFile, writeFile } = require("fs");

console.log("Start!");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }

  const first = result;
  console.log(first);
  readFile("./content/text.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("Done with writing task!");
      }
    );
  });
});
console.log("Starting next task...");

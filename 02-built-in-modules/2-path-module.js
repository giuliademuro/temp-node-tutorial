const path = require("path");

console.log(path.sep); //Stampa il separatore dei percorsi "/"

const filePath = path.join("/content", "subfolder", "test.txt"); //Specifica dei segmenti di percorso precisi unendoli in un solo percorso
console.log(filePath);

const base = path.basename(filePath); //Restituisce l'ultima porzione di un percorso, in generele il nome del file finale a cui si vuole accedere
console.log(base);

//Restituisce un path assoluto
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

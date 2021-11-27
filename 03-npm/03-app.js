// npm - comando globale
// npm --version(--v)

//Dipendenze locali - Da usare solo nel progetto in questione
//npm i <packageName>

//Dipendenze globali - Da usare in qualsiasi progetto
// npm install -g <packageName>

// package.json - manifest file (salva informazioni importanti su progetto/pacchetti)
// Approccio manuale: creare package.json nella radice, creare le proprietà, ecc.
// npm init (passo per passo, premere INVIO per saltare)
// npm init -y (Ogni cosa default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

const names = require("./1-names"); //Import il modulo con i nomi
const sayHi = require("./1-utils"); //Importa il modulo funzione
const bob = require("./1- alternative-syntax");
require("./1-mind-grenade");

//Dato che sia le variabili sono in formato oggetto, per richiamarle occorre usare la notazione col punto
sayHi(names.susan);
sayHi(names.carl);
sayHi(names.janny);

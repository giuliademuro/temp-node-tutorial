//OS module serve ad interagire con il sistema operativo

const os = require("os");

//Info sull'utente corrente
const user = os.userInfo();
console.log(user);

//Metodo che ritorna il tempo di attività del sistema in secondi
console.log(`The System Uptime is : ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);

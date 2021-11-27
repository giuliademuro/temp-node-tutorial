const http = require("http");

const server = http.createServer((req, res) => {
  //Richiesta del cliente, risposta inviata dal server
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(
      "<h1>Ooops!</h1><p> We can't find the page you request!</p><a href='/'>Return home</a>"
    );
  }
});

server.listen(5000, () => console.log("Server is running at port 5000...")); //(Porta del server, funzione callback chiamata in caso di successo)

// basado en apuntes.de/nodejs-desarrollo-web/body-parser/#gsc.tab=0
// como instalar un body parser
const { response } = require("express");
const express = require("express"); // express, esto viene  depackage.json
const server = express();   // servidor, de aqui sale para abrir el servidor y imprimir un texto

const empleado = {
    "primerNombre": "juan",
    "segundoNombre": "Alberto"
};

//cuando se llame va a entrar por este lado, recibe una funcion
server.get("/", function(request, response){
    response.send("Servicio raiz....");
});


// segundo servicio
    // entrega object a nivel del JS, se vera en pantalla
server.get('/empleado', function(request, response){
    response.send(empleado);
});

// apertura del puerto para escuchar peticiones entrantes mediante el uso de una expresion lamda
server.listen(
    3000, ()=>{
        console.log("hola mundo... inicio servidor");
    }
);

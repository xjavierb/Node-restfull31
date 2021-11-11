/*
ejemplo de 3 micro servicios de prueba
*/

// basado en apuntes.de/nodejs-desarrollo-web/body-parser/#gsc.tab=0
// como instalar un body parser
const { response } = require("express");
const express = require("express"); // express, esto viene  depackage.json
const server = express();   // servidor, de aqui sale para abrir el servidor y imprimir un texto

const empleado = {
    "primerNombre": "juan",
    "segundoNombre": "Alberto",
    "numeroDocumento": "123456"
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
});

// prueba 3
server.get("/prueba", function(request, response){
    response.send(server);
});

// prueba 4
server.get("/empleado/:id", function(request, response){
    const idObj = request.params.id;
    if(empleado.numeroDocumento === idObj){
        response.send(empleado);
    }else{
        response.send("no exist empleado");
    }
});

// prueba 5



// apertura del puerto para escuchar peticiones entrantes mediante el uso de una expresion lamda
server.listen(
    3000, ()=>{
        console.log("hola mundo... inicio servidor");
    }
);
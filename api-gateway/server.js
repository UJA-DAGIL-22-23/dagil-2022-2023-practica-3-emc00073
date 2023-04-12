/**
 * @file server.js
 * @description Define el servidor que aceptará las peticiones para esta aplicación.
 * Este servicio deriva las llamadas del front-end a su consiguiente microservicio.
 * Para ello, usa el objeto setupProxies importado de la biblioteca proxy.
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

const express = require("express");
const {routes} = require("./proxy-routes");
const {setupProxies} = require("./proxy");
const app = express();
const port = 8001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

setupProxies(app, routes);
app.listen(port, () => {
  console.log(`Aplicación API-Gateway escuchando en ${port}!`);
});

module.exports=app

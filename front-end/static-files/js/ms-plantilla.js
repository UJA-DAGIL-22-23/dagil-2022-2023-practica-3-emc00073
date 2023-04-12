/**
 * @file Plantilla.js
 * @description Funciones para el procesamiento de la info enviada por el MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

"use strict";

/// Creo el espacio de nombres
let Plantilla = {};

let ascendente_nombre = false;
let ascendente_nacionalidad = false;
let ascendente_categoria = false;
let ascendente_mundialesParticipados = false;
let ascendente_fechaNacimiento = false;
let ascendente_añosMundiales = false;

// Plantilla de datosDescargados vacíos
Plantilla.datosDescargadosNulos = {
    mensaje: "Datos Descargados No válidos",
    autor: "",
    email: "",
    fecha: ""
}

/**
 * Función principal para recuperar los atletas desde el MS y, posteriormente, imprimirlos.
 * @returns True
 */
Plantilla.listar = function () {
    this.recupera(this.imprime);
}

/**
 * Función que recuperar todos los atletas llamando al MS Plantilla
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.recupera = async function (callBackFn) {
    let response = null

    // Intento conectar con el microservicio atletas
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todos los atletas que se han descargado
    let vectorAtletas = null
    if (response) {
        vectorAtletas = await response.json()
        callBackFn(vectorAtletas.data)
    }
}

/**
 * Función para mostrar en pantalla todos los atletas que se han recuperado de la BBDD.
 * @param {Vector_de_atletas} vector Vector con los datos de los atletas a mostrar
 */
Plantilla.imprime = function (vector) {
    ascendente_nombre = false;
    ascendente_nacionalidad = false;
    ascendente_categoria = false;
    ascendente_mundialesParticipados = false;
    ascendente_fechaNacimiento = false;
    ascendente_añosMundiales = false;

    console.log( vector ) // Para comprobar lo que hay en vector

    let msj = "";
    msj += Plantilla.cabeceraTable();
    vector.forEach(e => msj += Plantilla.cuerpoTr(e))
    msj += Plantilla.pieTable();

    // Borro toda la info de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar( "Listado de atletas", msj )
}

/**
 * Función para recuperar y mostrar en pantalla todos los atletas ordenados por nombre que se han recuperado de la BBDD.
 */
Plantilla.imprimeOrdenadoNombre = async function () {

    let response = null

    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todos los atletas que se han descargado
    let raw_vector = null
    if (response) {
        raw_vector = await response.json()
        let vector = raw_vector.data
    
        ascendente_nombre = !ascendente_nombre
        vector.sort((a, b) => ascendente_nombre ? a.data.nombre.localeCompare(b.data.nombre) : b.data.nombre.localeCompare(a.data.nombre));

        let msj = "";
        msj += Plantilla.cabeceraTable();
        vector.forEach(e => msj += Plantilla.cuerpoTr(e))
        msj += Plantilla.pieTable();

        // Borro toda la info de Article y la sustituyo por la que me interesa
        Frontend.Article.actualizar( "Listado de atletas", msj )
    }
}

/**
 * Función para recuperar y mostrar en pantalla todos los atletas ordenados por nacionalidad que se han recuperado de la BBDD.
 */
Plantilla.imprimeOrdenadoNacionalidad = async function () {

    let response = null

    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todos los atletas que se han descargado
    let raw_vector = null
    if (response) {
        raw_vector = await response.json()
        let vector = raw_vector.data
    
        ascendente_nacionalidad = !ascendente_nacionalidad
        vector.sort((a, b) => ascendente_nacionalidad ? a.data.nacionalidad.localeCompare(b.data.nacionalidad) : b.data.nacionalidad.localeCompare(a.data.nacionalidad));

        let msj = "";
        msj += Plantilla.cabeceraTable();
        vector.forEach(e => msj += Plantilla.cuerpoTr(e))
        msj += Plantilla.pieTable();

        // Borro toda la info de Article y la sustituyo por la que me interesa
        Frontend.Article.actualizar( "Listado de atletas", msj )
    }
}

/**
 * Función para recuperar y mostrar en pantalla todos los atletas ordenados por categoría que se han recuperado de la BBDD.
 */
Plantilla.imprimeOrdenadoCategoria = async function () {

    let response = null

    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todos los atletas que se han descargado
    let raw_vector = null
    if (response) {
        raw_vector = await response.json()
        let vector = raw_vector.data
    
        ascendente_categoria = !ascendente_categoria
        vector.sort((a, b) => ascendente_categoria ? a.data.categoría.localeCompare(b.data.categoría) : b.data.categoría.localeCompare(a.data.categoría));

        let msj = "";
        msj += Plantilla.cabeceraTable();
        vector.forEach(e => msj += Plantilla.cuerpoTr(e))
        msj += Plantilla.pieTable();

        // Borro toda la info de Article y la sustituyo por la que me interesa
        Frontend.Article.actualizar( "Listado de atletas", msj )
    }
}

/**
 * Función para recuperar y mostrar en pantalla todos los atletas ordenados por el número de mundiales en los que han participado que se han recuperado de la BBDD.
 */
Plantilla.imprimeOrdenadoMundialesParticipados = async function () {

    let response = null

    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todos los atletas que se han descargado
    let raw_vector = null
    if (response) {
        raw_vector = await response.json()
        let vector = raw_vector.data
    
        ascendente_mundialesParticipados = !ascendente_mundialesParticipados
        vector.sort((a, b) => ascendente_mundialesParticipados ? a.data.mundiales_participados - b.data.mundiales_participados : b.data.mundiales_participados - a.data.mundiales_participados);

        let msj = "";
        msj += Plantilla.cabeceraTable();
        vector.forEach(e => msj += Plantilla.cuerpoTr(e))
        msj += Plantilla.pieTable();

        // Borro toda la info de Article y la sustituyo por la que me interesa
        Frontend.Article.actualizar( "Listado de atletas", msj )
    }
}

/**
 * Función para recuperar y mostrar en pantalla todos los atletas ordenados por su fecha nacimiento que se han recuperado de la BBDD.
 */
Plantilla.imprimeOrdenadoFechaNacimiento = async function () {

    let response = null

    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todos los atletas que se han descargado
    let raw_vector = null
    if (response) {
        raw_vector = await response.json()
        let vector = raw_vector.data
    
        ascendente_fechaNacimiento = !ascendente_fechaNacimiento
        console.log(vector);
        vector.sort((a, b) => ascendente_fechaNacimiento ? compareFechas(a.data.fecha_nacimiento, b.data.fecha_nacimiento) : compareFechas(b.data.fecha_nacimiento, a.data.fecha_nacimiento));

        let msj = "";
        msj += Plantilla.cabeceraTable();
        vector.forEach(e => msj += Plantilla.cuerpoTr(e))
        msj += Plantilla.pieTable();

        // Borro toda la info de Article y la sustituyo por la que me interesa
        Frontend.Article.actualizar( "Listado de atletas", msj )
    }
}

function compareFechas(fecha1, fecha2) {
    if (fecha1.año > fecha2.año) {
      return 1;
    } else if (fecha1.año < fecha2.año) {
      return -1;
    } else {
      if (fecha1.mes > fecha2.mes) {
        return 1;
      } else if (fecha1.mes < fecha2.mes) {
        return -1;
      } else {
        if (fecha1.dia > fecha2.dia) {
          return 1;
        } else if (fecha1.dia < fecha2.dia) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  }
  
/**
 * Función para recuperar y mostrar en pantalla todos los atletas ordenados por sus años en los mundiales que se han recuperado de la BBDD.
 */
Plantilla.imprimeOrdenadoAñosMundiales = async function () {

    let response = null

    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodos"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todos los atletas que se han descargado
    let raw_vector = null
    if (response) {
        raw_vector = await response.json()
        let vector = raw_vector.data
    
        ascendente_añosMundiales = !ascendente_añosMundiales
        console.log(vector);
        vector.sort((a, b) => ascendente_añosMundiales ? a.data.años_mundiales[0] - b.data.años_mundiales[0] : b.data.años_mundiales[0] - a.data.años_mundiales[0]);

        let msj = "";
        msj += Plantilla.cabeceraTable();
        vector.forEach(e => msj += Plantilla.cuerpoTr(e))
        msj += Plantilla.pieTable();

        // Borro toda la info de Article y la sustituyo por la que me interesa
        Frontend.Article.actualizar( "Listado de atletas", msj )
    }
}

/**
 * Función que recuperar un atleta llamando al MS Plantilla
 */
Plantilla.recuperaUnAtleta = async function (ID) {
    let response = null

    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getAtletaPorId?id=" + ID
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    let atleta = null
    if (response) {
        atleta = await response.json()

        let msj = "";
        msj += Plantilla.cabeceraTable();
        msj += Plantilla.cuerpoTr(atleta);
        msj += Plantilla.pieTable();

        // Borro toda la info de Article y la sustituyo por la que me interesa
        Frontend.Article.actualizar( "Datos del atleta", msj )
    }
}

// Funciones para mostrar como TABLE

/**
 * Crea la cabecera para mostrar la info como tabla
 * @returns Cabecera de la tabla
 */
Plantilla.cabeceraTable = function () {
    return `<table class="listado-atletas">
        <thead>
            <th onclick="Plantilla.imprimeOrdenadoNombre()">Nombre</th>
            <th onclick="Plantilla.imprimeOrdenadoFechaNacimiento()">Fecha de nacimiento</th>
            <th onclick="Plantilla.imprimeOrdenadoNacionalidad()">Nacionalidad</th>
            <th onclick="Plantilla.imprimeOrdenadoMundialesParticipados()">Mundiales participados</th>
            <th onclick="Plantilla.imprimeOrdenadoAñosMundiales()">Años mundiales</th>
            <th onclick="Plantilla.imprimeOrdenadoCategoria()">Categoría</th>
            <th>Mostrar</th>
        </thead>
        <tbody>
    `;
}

/**
 * Muestra la información de cada atleta en un elemento TR con sus correspondientes TD
 * @param {atleta} a Datos del atleta a mostrar
 * @returns Cadena conteniendo todo el elemento TR que muestra el atleta.
 */
Plantilla.cuerpoTr = function (a) {
    const d = a.data
    console.log(a)

    return `<tr title="${a.ref['@ref'].id}">
            <td><em>${d.nombre}</em></td>
            <td>${d.fecha_nacimiento.dia}/${d.fecha_nacimiento.mes}/${d.fecha_nacimiento.año}</td>
            <td>${d.nacionalidad}</td>
            <td>${d.mundiales_participados}</td>
            <td>${d.años_mundiales.join(" / ")}</td>
            <td>${d.categoría}</td>
            <td>
                <div><a href="javascript:Plantilla.recuperaUnAtleta('${a.ref['@ref'].id}')">Mostrar</a></div>
            </td>
            </tr>`;
}

/**
 * Pie de la tabla en la que se muestran los atletas
 * @returns Cadena con el pie de la tabla
 */
Plantilla.pieTable = function () {
    return "</tbody></table>";
}

/**
 * Función que descarga la info MS Plantilla al llamar a una de sus rutas
 * @param {string} ruta Ruta a descargar
 * @param {función} callBackFn Función a la que se llamará una vez recibidos los datos.
 */
Plantilla.descargarRuta = async function (ruta, callBackFn) {
    let response = null

    // Intento conectar con el microservicio Plantilla
    try {
        const url = Frontend.API_GATEWAY + ruta
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro la info que se han descargado
    let datosDescargados = null
    if (response) {
        datosDescargados = await response.json()
        callBackFn(datosDescargados)
    }
}


/**
 * Función principal para mostrar los datos enviados por la ruta "home" de MS Plantilla
 */
Plantilla.mostrarHome = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene el campo mensaje
    if (typeof datosDescargados.mensaje === "undefined") datosDescargados = this.datosDescargadosNulos

    Frontend.Article.actualizar("Plantilla Home", datosDescargados.mensaje)
}

/**
 * Función principal para mostrar los datos enviados por la ruta "acerca de" de MS Plantilla
 */
Plantilla.mostrarAcercaDe = function (datosDescargados) {
    // Si no se ha proporcionado valor para datosDescargados
    datosDescargados = datosDescargados || this.datosDescargadosNulos

    // Si datos descargados NO es un objeto 
    if (typeof datosDescargados !== "object") datosDescargados = this.datosDescargadosNulos

    // Si datos descargados NO contiene los campos mensaje, autor, o email
    if (typeof datosDescargados.mensaje === "undefined" ||
        typeof datosDescargados.autor === "undefined" ||
        typeof datosDescargados.email === "undefined" ||
        typeof datosDescargados.fecha === "undefined"
    ) datosDescargados = this.datosDescargadosNulos

    const mensajeAMostrar = `<div>
    <p>${datosDescargados.mensaje}</p>
    <ul>
        <li><b>Autor/a</b>: ${datosDescargados.autor}</li>
        <li><b>E-mail</b>: ${datosDescargados.email}</li>
        <li><b>Fecha</b>: ${datosDescargados.fecha}</li>
    </ul>
    </div>
    `;
    Frontend.Article.actualizar("Plantilla Acerca de", mensajeAMostrar)
}


/**
 * Función principal para responder al evento de elegir la opción "Home"
 */
Plantilla.procesarHome = function () {
    this.descargarRuta("/plantilla/", this.mostrarHome);
}

/**
 * Función principal para responder al evento de elegir la opción "Acerca de"
 */
Plantilla.procesarAcercaDe = function () {
    this.descargarRuta("/plantilla/acercade", this.mostrarAcercaDe);
}
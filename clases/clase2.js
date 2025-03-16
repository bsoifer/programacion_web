/* Javascript: variables, tipos de datos (variable, constante, array, objeto), array de objetos, operadores logicos(&& ||), aritmeticos(<>) y matematicos(+-* /), parseo de datos,thurty y flasy */

// variable: espacio reservado en memoria que almacena un valor bajo una denominación

/*
C:
int edad = 10

edad = 10.1

Python
edad = 10
edad = "pepe"
nombre = "Esteban"
profesor = True
*/

let edad = 10
let nombre = "Esteban"
let profesor = true

/* deprecado */
var edad2 = 11 // no lo usamos


/*constante*/

const apodo = "Steve"
apodo = "otra cosa"

/* array (lista) */

let numero = [1,2,3,4]
const LETRAS = ["a","b","c"]
const VARIADITO = [1,"asd",True]
const ARRAYMULTIPLE = [[1,2,3],[4,5,6,]]

/* objeto literal (diccionario) */
//camelCase , snake_case , kebab-case , l33t , PascalCase
let mejorProfesor =
{
    nombre: "Esteban",
    apellido : "Piazza",
    edad : 32,
    profesor : true,
    alumno: false,
    cumplirAnios : function(){
        this.edad =  this.edad+1
    }

}

/* array de objetos literales */

let ayudante1 = {nombre:"Dani",apellido:"Maradei"}
let ayudante2 = {nombre:"Franco",apellido:"Vietyes"}
let ayudante3 = {nombre:"Sofia",apellido:"Ronconco"}

const ALUMNOS = [ayudante1,ayudante2,ayudante3]


/************************************/

/* Operadores logicos*/
//Python AND - &&
console.log(1 && 2)

// Python Or - Js : || 
console.log(1||2)


//truthy falsy


// operadores matematicos
// +
// - 
// * 
// /
//  % resto
// **

// operadores aritmeticos

// >
// <
// >=
// <= 
// ==
// ===
// !=
// !===
/* los debiles comparan solo el contenido, los estrictos tambien el tipo de dato*/




// parseo de datos




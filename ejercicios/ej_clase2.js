/* 1. Ejercicio 1: Declaración de Variables
Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país, y otra 
para almacenar tu edad de nacimiento. Imprime los valores en la consola 
y después intenta cambiar los valores y observa los resultados con let y const. 
*/

let ciudad = "Buenos Aires"
let pais = "Argentina"
let edad = 23

console.log("Ciudad: "+ ciudad+". País: "+ pais+". Edad: "+ edad)

ciudad = "Olivos"

const pais_2 = "Argentina"
pais_2 = "Brasil"

/* 2. Ejercicio 2: Operaciones Matemáticas
Declara tres variables numéricas. Calcula el promedio de las tres y encuentra el 
residuo de la división de la suma total entre 2. Imprime los resultados.
*/
let x
let y
let z
let promedio
let residuo

x = 5
y = 6
z = 7

promedio = (x+y+z)/3
residuo = z%x

/* 3. Ejercicio 3: Tipos de Datos
Declara una variable para almacenar un objeto que represente un coche 
con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof.
*/

let coche
coche = {
    marca: "AUDI",
    modelo: "A4",
    anio: 2020
}

typeof(coche.marca)
typeof(coche.modelo)
typeof(coche.anio)
typeof(coche)

/*
4. Ejercicio 4: Arrays Básicos
Crea un array con los nombres de 5 ciudades que te gustaría visitar. 
Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.
*/

let ciudades
ciudades = ["Paris", "Roma", "Beijing", "Praga", "New York", 1]
ciudades[2] = "Jerusalem"

/* Ejercicio adicional
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

for(i = 0; i < myObj.cars.length; i++){
    console.log(myObj.cars[i].name)
    for(j = 0; j < myObj.cars[i].models.length; j++){
        console.log(myObj.cars[i].models[j])
    }
}
*/

/*
5. Ejercicio 5: Array de Objetos
Crea un array de 3 objetos que representen películas, cada una con título, director y año de
lanzamiento. Imprime el director de la última película.
*/

const peliculas = [
  {titulo: "Toy  Story", director: "John Lasseter", lanzamiento: 1999},
  {titulo: "Los Increibles", director: "Brad Bird", lanzamiento: 2004},
  {titulo: "Ratatouille", director: "Brad Bird", lanzamiento: 2007}
]

console.log(peliculas[peliculas.length-1].director)


/* 6. Ejercicio 6: Operadores Lógicos
Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos
son verdaderas. Imprime true o false en la consola dependiendo del resultado.
*/

let booleana1 = true
let booleana2 = true
let booleana3 = false

if((booleana1 === true && booleana2 === true) || (booleana1 === true && booleana3 === true) || (booleana2 === true && booleana3 === true)){
  console.log("Al menos dos variables son true")
}else{
  console.log("Al menos dos variables son false")
}

/* 7. Ejercicio 7: Comparaciones
Declara tres variables numéricas. Compara si el primer número es mayor que el segundo y
menor que el tercero. Luego, verifica si el segundo número es distinto al tercero. Imprime
los resultados de las comparaciones.
*/

let var1 = 15
let var2 = 10
let var3 = 100

if(var1 > var2 && var1 < var3){
  if(var2 !== var3){
    console.log("Se cumplen las condiciones")
  }else{
    console.log("El tercer número es igual al segundo")
  }
}else{
  console.log("El segundo número es mayor o igual al primero, ó el primer número es mayor o igual al tercero")
}

/* 8. Ejercicio 8: Concatenación de Strings
Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). Luego,
crea una tercera variable que concatene las dos primeras y muestra el resultado en la
consola.
*/

let nombre = "Estaban"
let apellido = "Quito"
let nombreApellido = nombre + " " + apellido

console.log("Nombre y apellido: " + nombreApellido)

/* 9. Ejercicio 9: Incremento y Decremento
Declara una variable numérica y utiliza los operadores de incremento (++) y decremento
(--) para modificar su valor. Imprime el valor de la variable después de cada operación.
*/

let varNumerica = 0;

// llevarla de a uno hasta diez
console.log(varNumerica);
for(let i = 1; i <= 10; i++){
  varNumerica++;
  console.log(varNumerica);
}

//llevarla de nuevo a cero de a uno
console.log(varNumerica);
for(let i = 1; i <= 10; i++){
  varNumerica--;
  console.log(varNumerica);
}

/* 10. Ejercicio 10: Propiedades de Objetos
Crea un objeto que represente un estudiante con propiedades como nombre, edad y
carrera. Accede e imprime cada propiedad del objeto.
*/

let estudiante = {
  nombre: "Esteban",
  apellido: "Quito",
  edad: 23,
  carrera: "analitica"
}

console.log(estudiante.nombre)
console.log(estudiante["carrera"])

/*
11. Ejercicio 11: Arrays Multidimensionales
Crea un array que contenga dos arrays internos, cada uno con 3 números. Accede al
segundo elemento del primer array interno.
*/

let ejercicioOnce = [[1,6,3],[30,6,34]]

console.log("El segundo elemento del primer array es: " + ejercicioOnce[0][1])


/* 12. Ejercicio 12: Operadores Relacionales
Declara dos variables numéricas y utiliza los operadores >, <, >=, <=, ===, !== para
comparar sus valores. Imprime el resultado de cada comparación.
*/

let variable1 = 10
let variable2 = 32

variable1 > variable2
variable1 < variable2
variable1 >= variable2
variable1 <= variable2
variable1 === variable2
variable1 !== variable2

/*
13. Ejercicio 13: Uso de typeof con Variables No Definidas
Declara una variable sin asignarle un valor y otra variable con valor null. Utiliza typeof
para imprimir el tipo de cada variable.
*/

let variableSinValor
let variableNull = null

typeof(variableSinValor)
typeof(variableNull)


/*
14. Ejercicio 14: Conversión de Tipos
Declara una variable que almacene un número como string (por ejemplo, "123"). Convierte
este string a un número usando parseInt o Number y demuestra que ahora puedes
realizar operaciones matemáticas con él.
*/

let numeroString = "100"
numeroString = Number(numeroString)

numeroString + 5

// Páginas de ejercicios a leer: 8, 9, 13, 14
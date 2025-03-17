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
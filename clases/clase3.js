// Hay tres maneras de hacer funciones

// 1. Función expresada

function sumar (a,b){
    return a + b
}

console.log(sumar(1,2))


//2. Funcióm declarada --> variable que es una función. Necesita ser declarada para ser llamada
let restar = function(a,b){
    return a-b
}

//pocas funciones --> conviene expresada. Recomendada
//muchas funciones --> conviene declarada


//3. Funciones flecha
let masCien = (a) => a + 100


// Estructura condicional

// 4 operaciones básicas de una página web: CRUD (create, read, update, delete)

function dejarPasar(edad, acompaniado){
    if(edad > 18 || acompaniado === true){
        return("Puede pasar")
    }else if(acompaniado === false){
        return("No puede pasar")
    }else{
        return("Error")
    }
}

// Operador Ternario
"La cuotaes de: " + (isMember ? "$2:00" : "$10.00")


let edad = 19
let acompaniado = true
let resultado = edad > 18 || acompaniado == true ? "Puede pasar" : "No puede pasar"



// For loop
let x = 100
for(let i=0; i < 101; i++){
    console.log(i)
}

// while
let z = 0
while( z < 0){
    console.log(z)
    z += 1
}


// For + array
let NUMEROS = [1,2,3,4,5]

for(let i = 0; i < NUMEROS.length; i++){
    console.log(NUMEROS[i])
}

// Buscador en el array
function encontrarValor(array, valor){
    for(let i = 0; i < array.length; i++){
        if(array[i] == valor){
            return i
        }else{
            return "El va"
        }
    }
}


// Revisar métodos de arrays


// callback: cuando le pasas una función como parámetro a otra funcion
function multiplicar(a,b){
    return a*b
}

function calculadora(num1, num2, funcion){
    return funcion(num1, num2)
}

console.log(calculadora(2,3,multiplicar))


let nombre = "Esteban"
let resultado_2 = ""
for(let i = 0; i < (nombre.length)/2; i++){
    resultado_2 += nombre[i]
}
console.log(resultado_2)


//npm install prompt-sync

const prompt = require('prompt-sync')()
const name = prompt("What is your name?") // input
console.log(`Hey there ${name}`)




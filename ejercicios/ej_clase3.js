// Revisar metodos de arrays
// Páginas de ejercicios a leer: 1, 3

/*1. Ejercicio 1: Función Declarada
Escribe una función que tome tres números como argumentos y retorne el mayor de ellos.
Llama a la función con diferentes valores e imprime el resultado.
*/

let numeroMayor = function(a,b,c){
    if(a===b && a===c && b===c){
        return "Los tres numeros son iguales"
    }else if(a > b && a > c){
        return ("El numero mas grande es " + a)
    }else if(b > a && b > c){
        return ("El numero mas grande es " + b)
    }else if(c > b && c > a){
        return ("El numero mas grande es " + c)
    }else{
        return "ERROR"
    }
}

numeroMayor(1,1,1)
numeroMayor(1,2,3)
numeroMayor(3,2,1)
numeroMayor(1,3,2)
numeroMayor("hola", 1, 2)


/*
2. Ejercicio 2: Función Expresada
Crea una función expresada que reciba un array de strings y retorne un string que
concatena todos los elementos del array separados por espacios.
*/

function arrayConcatenado(array){
    let resultado
    if(array !== null){
        if(array.length != 0){
            resultado = array[0]
        
            for(let i = 1; i < array.length; i++){
                resultado += " " + array[i]
            }
        }   
    
        return resultado !== null ? resultado : "ERROR";
    }
}

ejemplo = ["Hola", "soy", "Bruno"]
arrayConcatenado(ejemplo)

/*
3. Ejercicio 3: Función Flecha
Convierte la función del ejercicio anterior a una función de flecha. Además, agrega una
validación para que, si el array está vacío, retorna un mensaje de advertencia.
*/

let arrayConcatenadoFlecha = (array) => {
    let resultado
    if(array !== null){
        if(array.length > 0){
            resultado = array[0]
        
            for(let i = 1; i < array.length; i++){
                resultado += " " + array[i]
            }

            return resultado !== null ? resultado: "ERROR"
        }else{
            return "ERROR"
        }
    }else{
        return "ERROR"
    }
}

arrayConcatenadoFlecha(ejemplo)
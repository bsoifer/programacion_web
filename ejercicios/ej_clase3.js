// Revisar metodos de arrays
// Páginas de ejercicios a leer: 1, 3, 4, 5, 8, 10

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

/*
4. Ejercicio 4: Estructura If-Else
Escribe una función que tome una temperatura en grados Celsius como argumento y
devuelva un mensaje que indique si hace frío (menor a 15 grados), templado (entre 15 y 25
grados) o calor (mayor a 25 grados).
*/

function ejercicio4 (grados){
    if(grados !== null){
        if(grados < 15){
            return "Hace frío"
        }else if(grados < 25){
            return "Está templado"
        }else if(grados >25){
            return "Hace calor"
        }else{
            return "ERROR"
        }
    }else{
        return "ERROR"
    }
}

ejercicio4(10)
ejercicio4(20)
ejercicio4(30)
ejercicio4("hola")

/*
5. Ejercicio 5: Operador Ternario
Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si
es antes de las 12, "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es
después de las 18, utilizando operadores ternarios.
*/

function ejercicio5(hora){
    return (hora < 12 ? "Buenos días": (hora <= 18 ? "Buenas tardes": "Buenas noches"))
}

ejercicio5(22)


/*
6. Ejercicio 6: Operadores And y Or
Escribe una función que reciba cuatro argumentos booleanos y retorne true si al menos
uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.
*/

function ejercicio6(bool1, bool2, bool3, bool4){
    let respuesta = false

    if(bool1 === true || bool2 === true){
        if(bool3 === false || bool4 === false){
            respuesta = true
        }
    }

    return respuesta
}

ejercicio6(true, false, true, false)

/*
7. Ejercicio 7: Función que Calcula el Factorial
Escribe una función que tome un número como argumento y retorne su factorial. Utiliza una
estructura if para manejar el caso base.
*/

function ejercicio7(x){
    let resultado = x
    if(x >= 0){
        if(x === 0){
            resultado = 1
        } else{
            for(let i = x-1; i >= 1; i--){
                resultado *= i
            }
        }
    return(resultado)
    }else{
        return "ERROR"
    }
}

ejercicio7(0)
ejercicio7(-1)

/*
8. Ejercicio 8: Función con Parámetros por Defecto
Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar
con "Hola, invitado".
*/

function ejercicio8(nombre){
    if(nombre === null || nombre === NaN || nombre === undefined || nombre === ''){
        return "Hola, invitado"
    }else{
        return `Hola, ${nombre}!`
    }
}

const prompt = require('prompt-sync')()
const name = prompt("¿Cómo es tu nombre?")
ejercicio8(name)


/*
9. Ejercicio 9: Función que Verifica Números Pares
Escribe una función que tome un número y retorne true si es par o false si es impar.
Utiliza el operador módulo (%) y un operador ternario.
*/

function ejercicio9(x){
    return x%2 === 0 ? true:false
}

ejercicio9(9)

/*
10. Ejercicio 10: Uso de switch
Escribe una función que reciba un día de la semana (en número) y retorne el nombre del
día. Usa una estructura switch.
*/

function ejercicio10(x){
    switch(x){
        case 1:
            return "lunes"
            break
        case 2:
            return "martes"
            break
        case 3:
            return "miércoles"
            break   
        case 4:
            return "jueves"
            break
        case 5:
            return "viernes"
            break
        case 6:
            return "sábado"
            break
        case 7:
            return "domingo"
            break
        default:
            return "ERROR"
            break
    }
}

ejercicio10(4)

/*
11. Ejercicio 11: Función Recursiva
Crea una función recursiva que calcule la suma de los números de 1 hasta n.
*/

function ejercicio11(n){
    let resultado = 1
    if(n < 1){
        return "ERROR"
    }else{
        for(let i = 2; i <= n; i++){
            resultado += i
        }
        return resultado
    }
}

ejercicio11(5)

/*
12. Ejercicio 12: Validación con Operadores Lógicos
Escribe una función que verifique si una contraseña cumple con ciertos criterios: al menos 8
caracteres, contiene un número y una letra mayúscula. Utiliza operadores lógicos para
combinar las condiciones.
*/

function ejercicio12(password){
    let condicion1 = false
    let condicion2 = false
    let condicion3 = false
    if(password.length >= 8){
        condicion1 = true
    }

    for(let i = 0; i<password.length; i++){
        if(isNaN(password[i]) === false ){
            condicion2 = true
        }
        
        if(password[i] >= "A" && password[i] <= "Z"){
            condicion3 = true
        }
    }

    if(condicion1 && condicion2 && condicion3){
        return true
    }else{
        return false
    }
}

let password = "sdveqrgqevasDvc5sd"
let resultado = ejercicio12(password)

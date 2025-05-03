console.log("hola")

/* Guardar variable en local storage */
document.getElementById("guardarNombre").addEventListener("click", function(){
    let nombreUsuario = document.getElementById("nombre").value
    console.log(nombreUsuario)
    localStorage.setItem("nombreLocal", nombreUsuario)
})

/* Mostar local storage */
window.addEventListener("load", function(){
    document.getElementById("nombre").value = localStorage.getItem("nombreLocal")
})


localStorage.removeItem("nombreLocal") // Eliminar el local storage
localStorage.clear() // Eliminar todo el local storage


/* usuario. Esto es un objeto para Javascript, pero no lo puede interpretar 
fácilmente una base de datos. Por eso se creo un lenguaje intermedio entre JS
y las bases de datos, que son los JSON */
let usuario = {
    nombre: "Bruno",
    apellido: "Soifer",
    edad: 23,
    cumplirAnios: function(){
        this.edad += 1
    }
}

console.log(usuario.edad)


console.log(usuario)
console.log(JSON.stringify(usuario)) // Convierte el objeto a un string. No contempla las funciones, 
// porque solamente guarda datos.

let usuarioJSONEADO = JSON.stringify(usuario) 
let usuarioParseado = JSON.parse(usuarioJSONEADO) // parse es convertir un string a un objeto
console.log(usuarioParseado) 

console.log(usuarioJSONEADO.edad) // undefined, porque no es un objeto, es un string
console.log(usuarioParseado.edad) // 23, porque es un objeto

/* La forma de comunicar dos servidores es mediante una API, donde probablemente se comunique mediante JSON
Ej: estado de los subtes, clima, valor del dólar, etc.
Los JSON están pensados para bases de datos que no utilicen JavaScript */

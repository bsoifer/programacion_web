console.log("Hola mundo")
document.getElementById("nombre")
console.log(document.getElementById("nombre").value)

let botonSaludo  = document.getElementById("saludar")

botonSaludo.addEventListener("click", function (){
    let nombre = document.getElementById("nombre").value
    let textoSaludo = document.getElementById("personalizar")
    textoSaludo.innerText = `Hola ${nombre}`
    textoSaludo.style.color="red"
    let personalizacion = document.getElementById("personalizacion")
    personalizacion.innerHTML = `<marquee> TE odio ${nombre} </marquee>`
})


/* document.getElementById("nombre").addEventListener("mouseover", function(){
    alert("pasaste por arriba")
}) */


/*
 * class .nombreDeLaClase
 * id #nombreDelId
 */

let lista = document.getElementsByClassName("elemLista")
console.log(lista[0])


console.log(document.querySelector("#saludar").value)
console.log(document.querySelector(".elemLista"))
console.log(document.querySelectorAll(".elemLista")[1])


/***************************** */
let carrito = [];

let producto5= document.getElementById("producto5")
producto5.addEventListener("click", function (){
    carrito.push("producto")
    console.log(carrito)
})
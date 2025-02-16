// * variables
let inputPrincipal= document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let contenedor = document.querySelector(".container")
// * input, agregar, contenedor


class Item {
    constructor(tarea){
        this.creaDiv(tarea)
}

creaDiv(tarea){
    // crear input
    let inputItem = document.createElement("input")
    inputItem.type = "text"
    inputItem.disabled = true
    inputItem.classList.add("item-input")
    inputItem.value = tarea
    // creando nuevo div
    let div = document.createElement("div")
    div.classList.add("item")
    // crear el boton editar
    let botonEditar = document.createElement("button")
    botonEditar.innerHTML= `<i class="fa-solid fa-lock">🔒</i>`
    botonEditar.classList.add("botonEditar")

    // crear el boton remover
    let botonRemover = document.createElement("button")
    botonRemover.innerHTML = "<i class='fas-solid fa-trash'>🗑️</i>"
    botonRemover.classList.add("botonRemover")
    
    // agregar los elementos(nuevo div, inputItem, botones)

   div.appendChild(inputItem)
   div.appendChild(botonEditar)
   div.appendChild(botonRemover)
    contenedor.appendChild(div)

botonEditar.addEventListener("click", function(){
    if (inputItem.disabled === true) {
        inputItem.disabled = false;
        botonEditar.innerHTML = '<i class="fa-solid fa-lock-open">🔓</i>';
      } else {
        inputItem.disabled = true;
        botonEditar.innerHTML = '<i class="fa-solid fa-lock">🔒</i>';
      }
})
botonRemover.addEventListener("click", function(){
    div.remove()
})

}

}

function checkInput(){
    if( inputPrincipal.value === ""){
        alert("introduzaca la tarea")
    } else {
        new Item(inputPrincipal.value);
        inputPrincipal.value = ""
    }
}

botonAgregar.addEventListener("click", function(){
    checkInput()
})

inputPrincipal.addEventListener ("keydown", function (event){
    if(event.keyCode === 13){

        checkInput()
    }
})
 




// evento del boton agregar ("click",chequerar)
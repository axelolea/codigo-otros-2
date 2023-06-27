// usar variables const, para evitar problemas de inmutabilidad
const formulario = document.querySelector("#formulario")
const nacionalidades = {
  ar: "Argentina",
  mx: "Mexicana",
  pe: "Venezolana",
  ve: "Peruana",
}


formulario.addEventListener('submit', (event) => {

  // Colocar un prevent default
  event.preventDefault();
  
  // usar un form data para manipular mejor la data 
  const formData = new FormData(formulario);

  // Obtener valores del form
  const nombre = formData.get('name')
  const edad = formData.get('age')
  const nacionalidad = formData.get('nationality')

  // Validaciones mas limpias y agrupadas
  if (nombre.length === 0) n.classList.add("error")

  if (edad < 18 || edad > 120) e.classList.add("error")

  if (nombre.length > 0 && edad < 120 )
    agregarInvitado(nombre, edad, nacionalidad);

})

// Tener ya declrado fuera de la funcion el invitado container 
const invitadosContainer = document.getElementById("invitadosComtainer")

function agregarInvitado(nombre, edad, nacionalidad) {

  const elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
  invitadosContainer.appendChild(elementoLista)

  // Todo: Retirar funcion fuera del contexto de la funcion padre
  function crearElemento(descripcion, valor) {
    const container = document.createElement("div")
    const spanNombre = document.createElement("span")
    const inputNombre = document.createElement("input")
    spanNombre.textContent = `${descripcion}: `
    inputNombre.value = valor 
    container.appendChild(spanNombre)
    container.appendChild(inputNombre)
    elementoLista.appendChild(container)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidades[nacionalidad])


  // Borrando elementos innesarios 
  const botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    botonBorrar.parentNode.remove()
  }
}
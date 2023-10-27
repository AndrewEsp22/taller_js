document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); 
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const mensajeElement = document.getElementById("mens");

  if (edad >= 18) {
    const mensaje = `Hola ${nombre}, tienes ${edad} años osea eres mayor de edad`;
    mensajeElement.innerHTML = mensaje;
  } else {
    const mensaje = `Hola ${nombre}, tienes ${edad} años osea no eres mayor de edad`;
    mensajeElement.innerHTML = mensaje;
  }
});

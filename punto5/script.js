document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario recargue la página

  const numero = parseInt(document.querySelector("input[name='numero']").value);

  if (isNaN(numero) || numero < 1) {
    document.querySelector("#resultado").innerHTML = "Debe ingresar números enteros positivos.";
  } else {
    const esPar = numero % 2 === 0;
    if (esPar) {
      document.querySelector("#resultado").innerHTML = "El número es par.";
    } else {
      document.querySelector("#resultado").innerHTML = "El número es impar.";
    }
  }
});

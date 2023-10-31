document.addEventListener("DOMContentLoaded", function() {
    var boton = document.querySelector(".btn");
    boton.addEventListener("click", function() {
        var nombre = document.getElementById("nombre").value;
        var materia = document.getElementById("materia").value;
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);
        var nota3 = parseFloat(document.getElementById("nota3").value);

        var promedio = (nota1 + nota2 + nota3) / 3;

        var resultadoElement = document.getElementById("resultado");

        if (isNaN(promedio)) {
            resultadoElement.textContent = "Por favor, ingrese valores numéricos para las notas.";
            resultadoElement.style.color = "red";
        } else {
            resultadoElement.textContent = "Señor@ " + nombre + ", en la materia " + materia +
                " su promedio es: " + promedio.toFixed(2);

            if (promedio >= 3.0) {
                resultadoElement.textContent += ". ¡Felicidades! Has aprobado la materia.";
                resultadoElement.style.color = "green";
            } else {
                resultadoElement.textContent += ". No has aprobado la materia. Éxito en la próxima.";

                resultadoElement.style.color = "red";
            }
        }
    });
});


document.addEventListener("DOMContentLoaded",function(){
    const input = document.getElementById("palabra");
    const contador = document.getElementById("contador");

    input.addEventListener("input", function(){
        const texto = input.value;
        const cantidadCara = texto.length;
        contador.textContent = cantidadCara;
    });
});
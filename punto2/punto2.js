function identificartipo(){
    event.preventDefault();
    var valor = document.getElementById("valor").value;
    var esNumero = !isNaN(parseFloat(valor))&& isFinite(valor);
    var resultado = document.getElementById("resultado");
    if(esNumero){
        resultado.textContent="El valor ingresado es un numero"
    }else{
        resultado.textContent="El valor ingresado es un texto";
    }
}

var boton = document.getElementById("botonIdentificarTipo");
boton.addEventListener('click',identificartipo);
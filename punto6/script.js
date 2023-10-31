class BuscadorTexto {
    constructor() {
        this.buscarTexto = document.getElementById('buscarTexto');
        this.texto = document.getElementById('texto');
        this.resultado = document.getElementById('resultado');
    }

    buscarYResaltar() {
        const textoABuscar = this.buscarTexto.value;
        const textoCompleto = this.texto.value;
        const expresionRegular = new RegExp(textoABuscar, 'gi');
        const textoResaltado = textoCompleto.replace(expresionRegular, (match) => `<span class="resaltado">${match}</span>`);
        this.resultado.innerHTML = textoResaltado;
    }
}

function buscarYResaltar() {
    const buscador = new BuscadorTexto();
    buscador.buscarYResaltar();
}


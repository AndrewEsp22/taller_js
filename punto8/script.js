class IdentificadorNumeros {
    constructor() {
      this.numeros = document.getElementById("numeros");
      this.identificar = document.getElementById("identificar");
      this.salida = document.getElementById("salida");
  
      this.identificar.addEventListener("click", () => this.identificarNumeros());
    }
  
    identificarNumeros() {
      this.salida.innerHTML = ""; 
      const valores = this.numeros.value.split(",");
  
      valores.forEach((valor) => {
        const numero = parseFloat(valor);
        if (!isNaN(numero) && Number.isInteger(numero)) {
          if (numero % 2 === 0) {
            this.salida.innerHTML += `<p>${numero} es número par</p>`;
          } else {
            this.salida.innerHTML += `<p>${numero} es número impar</p>`;
          }
        } else {
          this.salida.innerHTML += `<p>${valor} no es un número entero</p>`;
        }
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const identificador = new IdentificadorNumeros();
  });
  
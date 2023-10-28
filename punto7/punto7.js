function calcular() {
    event.preventDefault();
    var numA = parseFloat(document.getElementById('numA').value);
    var numB = parseFloat(document.getElementById('numB').value);
    var resultado = document.getElementById('result');

    if(numA < 0 && numB < 0 && !Number.isInteger(numA) && !Number.isInteger(numB)){
        resultado.textContent = 'Los números'+ numA + ' y '+ numB + ' deben ser enteros positivos.';
    }else if(numA < 0 && !Number.isInteger(numA)){
        resultado.textContent = 'El número '+ numA+  ' debe ser entero positivo.';
    }else if(numB < 0 && !Number.isInteger(numB)){
        resultado.textContent = 'El número '+ B + ' debe ser entero positivo.';
    }else if(numA < 0 && numB < 0){
        resultado.textContent = 'Los números '+ numA +' y '+ numB +' deben ser positivos.';
    }else if (numA < 0) {
        resultado.textContent = 'El número '+ numA + ' debe ser positivo.';
    } else if (numB < 0) {
        resultado.textContent = 'El número '+numB+ ' debe ser positivo.';
    }else if (isNaN(numA) || isNaN(numB)) {
        resultado.textContent = 'Por favor, ingrese números válidos para' +numA+ 'y' +numB;
    } else if (!Number.isInteger(numA) && !Number.isInteger(numB)) {
        resultado.textContent = 'Ambos números '+ numA +' y ' + numB +' no son enteros.';
    } else if (!Number.isInteger(numA)) {
        resultado.textContent = 'El número '+numA +' no es un entero.';
    } else if (!Number.isInteger(numB)) {
        resultado.textContent = 'El número ' +numB+ ' no es un entero.';
    }  else if (numA % numB === 0) {
        resultado.textContent = numA + ' es divisible por ' + numB + '.';
    } else {
        resultado.textContent = numA + ' no es divisible por ' + numB + '.';
    }
}



    
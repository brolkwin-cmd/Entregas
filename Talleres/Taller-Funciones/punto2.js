let numeros = [5.4, 5, 7, 8, 7, 4];

function numeroMayor(numeros) {
    let mayor = numeros[0]; 

    numeros.forEach(numero => {
        if (numero > mayor) { 
            mayor = numero;
        }

    });

    console.log("El número mayor es:", mayor);
    return mayor;
}

numeroMayor(numeros);
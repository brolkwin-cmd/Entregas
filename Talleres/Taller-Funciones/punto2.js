let numeros = [5.4, 5, 7, 8, 7, 4];

function numeroMayor(lista) {
    let mayor = lista[0]; 

    lista.forEach(numero => {
        if (numero > mayor) { 
            mayor = numero;
        }

    });

    console.log("El número mayor es:", mayor);
    return mayor;
}

numeroMayor(numeros);
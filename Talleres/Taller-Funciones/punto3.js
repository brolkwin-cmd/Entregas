let numeros = [7,5,4,8,4,4,44];

function contarPares(numeros) {
    let sumaPares = 0

    numeros.forEach(numero => {
        if (numero % 2 === 0) { sumaPares = sumaPares + 1 }
    });
console.log("El número de pares es:", sumaPares);
    return sumaPares;
}
contarPares(numeros);

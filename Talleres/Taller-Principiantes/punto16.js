let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que el número ${numero2}`);
}
else if (numero1 < numero2) {
    console.log(`El número ${numero2} es mayor que el número ${numero1}`);
}
else {
    console.log(`Los números ${numero1} y ${numero2} son iguales`);
}
const aleatorio = Math.floor(Math.random() * 10) + 1;
let numero = prompt(`Ingresa el número`)
console.log(aleatorio);
console.log(numero);

if (aleatorio == numero) { console.log(`Adivinaste, los números son iguales`)}
else { console.log(`Vuelve a intentarlo`)};

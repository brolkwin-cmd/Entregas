let edad = prompt(`Ingresa tu edad`);

if (edad >= 18 && edad <= 65) {console.log(`Puede trabajar`)}
else if (edad < 18) {console.log(`Eres un baby, no puedes trabajar`)}
else {console.log(`Estas sobrecalificado y tu riesgo laboral es mayor, sigue intentando`)};
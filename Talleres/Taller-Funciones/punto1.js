let numeros = [1,5,4,3,7,4,7];

function sumarArray(numeros) { 
    let resultado = 0;
    numeros.forEach(numero=> {resultado += numero});

  console.log (resultado)
  return resultado;

};

sumarArray(numeros);
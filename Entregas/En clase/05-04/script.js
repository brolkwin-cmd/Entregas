class Personas {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerEdad() {
        return this.edad;
    }

    obtenerGenero() {
        return this.genero;
    }
}

const listaPersonas = [];

for (let i = 1; i <= 5; i++) {
    let nombre = prompt(`Ingresa el nombre de la persona ${i}`);
    let edad = prompt(`Ingresa la edad de ${nombre}`);
    let genero = prompt(`Ingresa el genero de ${nombre}`);
    
    const nuevaPersona = new Personas(nombre, edad, genero);
    listaPersonas.push(nuevaPersona);
}

console.log(listaPersonas);
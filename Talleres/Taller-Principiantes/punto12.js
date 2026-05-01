let persona = {
    nombre : "jose",
    edad : 52,
    ciudad : "Tabogo",
}

persona.ciudad= "Bogota";

console.log(persona.nombre, persona.edad, persona.ciudad);
console.log(persona[`nombre`], persona[`edad`], persona[`ciudad`]);
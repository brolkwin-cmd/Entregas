import { promedioNotas , obtenerEstado } from "./grades.js";
import { estudiantes } from "./students.js";

estudiantes.forEach(student => {
    const promedio = promedioNotas(student);
    const estado = obtenerEstado(promedio); 
    
    console.log(`${student.nombre} tiene un promedio: ${promedio.toFixed(1)} ${estado}`);
}); 

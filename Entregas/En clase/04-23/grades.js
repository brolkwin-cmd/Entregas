import { estudiantes } from "./students.js";

export function promedioNotas(student) {
    if (student.notas && student.notas.length > 0) {
        let notaFinal = 0;
        student.notas.forEach(nota => {
            notaFinal += nota;
        });
        return notaFinal / student.notas.length;
    } else {
        return 0;
    }         
}

export function obtenerEstado(promedio) {
    if (promedio >= 3.0) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

export function mejorEstudiante (estudiantes) {


}


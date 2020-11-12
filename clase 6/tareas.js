//nombres : string
//apellidos: string
//edad: int
//curso: string
//notas: array de floats
//OBJETO
//let estudiante1 = { 
  //  nombres: "Pedro Antonio", 
    //curso: " Seconda", 
    //edad:45, 
    //notas: [5, 8, 9,30],
//}
//console.log(estudiante1);

let estudiantes = [
    {
            nombres: "Pedro Antonio", 
            apellidos: "Peres Rodriguez",
            curso: " Seconda", 
            edad:45, 
            notas: [5, 8, 9,30],
    },
    {
        nombres: "Juan Antonio", 
        apellidos: "Gonmez Perez",
        curso: "Prima", 
        edad:54, 
        notas: [5, 8, 9,30],
    },
    {
        nombres: "Marcos Juan", 
        apellidos: "Gonzalez Duarte",
        curso: "Quarta", 
        edad:6, 
        notas: [5.8, 8, 9,30],
    }
]
let tabla = document.querySelector("#tablaEstudiantes")
//crear filas
// let juan = estudiantes[1];
// let fila = document.createElement("tr");
// let dato1 = document.createElement("td");
// dato1.innerHTML = juan.nombres;
// fila.appendChild(dato1);
// let dato2 = document.createElement("td");
// dato2.innerHTML = juan.apellidos;
// fila.appendChild(dato2);
// let dato3 = document.createElement("td");
// dato3.innerHTML = juan.nota;
// fila.appendChild(dato3);
// let dato4 = document.createElement("td");
// dato4.innerHTML = juan.curso;
// fila.appendChild(dato4);
// tabla.appendChild(fila);
for(estudiante of estudiantes)
{
    let fila = document.createElement("tr");
    for ( valor of Object.values(estudiante)){
        let celdaNueva = document.createElement("td");
        celdaNombre.innerHTML = valor;
        fila.appendChild(celdaNueva);
    }

    tabla.appendChild(fila);
 } //   let celdaNombre = document.createElement("td");
// celdaNombre.innerHTML = estudiante.nombres;
// fila.appendChild(celdaNombre);


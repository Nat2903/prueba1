
let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let tabla = document.querySelector("#tabla");

function addHeaders ()
{
        let fila = document.createElement("tr");
        let enc1 = document.createElement("th");
        enc1.innerHTML = "Materia";
        let enc2 = document.createElement("th");
        enc2.innerHTML = "Descripción";
        let enc3 = document.createElement("th");
        enc3.innerHTML = "Fecha";
        let fila1 = document.createElement("tr");
        let enc = document.createElement("th");
        enc.innerHTML = "text1";
        let enc5 = document.createElement("th");
        enc5.innerHTML = "text2";
        let enc6 = document.createElement("th");
        enc6.innerHTML = "text3"
        fila.appendChild(enc1);
        fila.appendChild(enc2);
        fila.appendChild(enc3);
        tabla.appendChild(fila);
}
addHeaders();
function additem ()
{
    let item = input.value;
    
}

// function hacertabla ()
// {
//     tabla.innerHTML = "";
//     addHeaders ();
    
//         let fila = document.createElement("tr");
//         // Creo los datos que van en la fila
//         let tdMateria = document.createElement("td");
//         tdMateria.innerHTML = item; //en su programa esto hara referencia al dato de materia ingresado por el usuario
//         let tdDescripcion = document.createElement("td");
//         tdDescripcion.innerHTML = item; //en su programa esto hara referencia al dato de descripcion ingresado por el usuario
//         let tdFecha = document.createElement("td");
//         tdFecha.innerHTML = item; ////en su programa esto hara referencia al dato de fecha ingresado por el usuario
    
//         // Añado los nuevos datos como children de la fila
//         fila.appendChild(tdMateria);
//         fila.appendChild(tdDescripcion);
//         fila.appendChild(tdFecha);
//         // Añado la fila a la tabla
//         tabla.appendChild(fila);

// }
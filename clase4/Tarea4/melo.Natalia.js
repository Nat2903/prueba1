
let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let tabla = document.querySelector("#tabla");
let boton = document.querySelector("#boton");
function addHeaders() {
    let fila = document.createElement("tr");
    let enc1 = document.createElement("th");
    enc1.innerHTML = "Materia";
    let enc2 = document.createElement("th");
    enc2.innerHTML = "Descripción";
    let enc3 = document.createElement("th");
    enc3.innerHTML = "Fecha";
  
    fila.appendChild(enc1);
    fila.appendChild(enc2);
    fila.appendChild(enc3);
    tabla.appendChild(fila);
  }

function hacerTabla()
{
        addHeaders();
        let fila = document.createElement("tr");
        let t1 = document.createElement("th");
        t1.innerHTML = item;
        let t2 = document.createElement("th");
        t2.innerHTML = item;
        let t3 = document.createElement("th");
        t3.innerHTML = item;
        fila.appendChild(t1);
        fila.appendChild(t2);
        fila.appendChild(t3);
        tabla.appendChild(fila);
}
function addItem() {
    let item1 = text1.value;
    let item2 = text2.value;
    let item3 = text3.value;
    tabla.push(item1);
    tabla.push(item2);
    tabla.push(item3);
    hacerTabla();
    input.value = "";
  }
  boton.onclick = addItem;
 


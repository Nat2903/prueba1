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
  let vfila = JSON.parse(window.localStorage.getItem("tarea"));
  if(vfila == null)
  {
    vfila = [];

  } 
  function hacerTabla()
{  
  tabla.innerHTML = "";  
  addHeaders();
  for(i of vfila){
    let fila = document.createElement("tr");
  for ( valor of Object.values(i)){
    let celdaNueva = document.createElement("td");
    celdaNueva.innerHTML = valor;
    fila.appendChild(celdaNueva);
}
tabla.appendChild(fila);

  }

 }

 function addItem() {
  
  // leer el valor que el usuario escribio
  let tareas =
{
        materias: text1.value, 
        descripcion: text2.value ,
        fecha: text3.value, 
}
  vfila.push(tareas);
  hacerTabla();
  window.localStorage.setItem("tarea", JSON.stringify(vfila));
  
  //Borrar lo que el usuario escribio
  tareas.value = " ";
}
 boton.onclick = addItem;
 hacerTabla();
 addItem();

 
let compras = JSON.parse(window.localStorage.getItem("compras"));
//Que ocurre si la variable compras no existe en el almacenamiento local?
if (compras == null) compras = [];

let lista = document.querySelector("#listaMercado");

// Opcion 1, for como en C
// for (let i = 0; i < compras.length; i++) {
//   let elemento = document.createElement("li");
//   elemento.innerHTML = compras[i];
//   lista.appendChild(elemento);
// }

// Opcion 2, for of.
// Se hace lo mismo para cada uno de los elementos de la lista.
function hacerLista() {
  lista.innerHTML = "";
  for (item of compras) {
    let elemento = document.createElement("li");
    elemento.innerHTML = item;
    lista.appendChild(elemento);
  }
}
let input = document.querySelector("#inputAdd");
let btn = document.querySelector("#btnAdd");

// Event listener
function addItem() {
  // leer el valor que el usuario escribio
  let item = input.value;
  compras.push(item);
  hacerLista();
  window.localStorage.setItem("compras", JSON.stringify); //ES EL CONTRARIO DE JSON.parse
  
  //Borrar lo que el usuario escribio
  input.value = "";
}
btn.onclick = addItem;
hacerLista();
// El almacenamiento local guarda unicamente cadenas de caracteres
//let notas =[6, 7, 6, 5, 8]; 
//console.log(JSON.stringify(notas)); //
//window.localStorage.setItem("curso","Quarta")
//window.localStorage.setItem("Notas",console.log(JSON.stringify(notas));
// en la pagina:
// window.localStorage.setItem("Notas")
//miArray = JSON.parse(window.localStorage.getItem)  
//parce toma una cadena de caracteres como un array

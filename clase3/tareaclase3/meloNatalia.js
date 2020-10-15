boton = document.querySelector("#boton");
t1= document.querySelector("#t1");
function cambiarcolor() {
  t1.style.backgroundColor = "tan";
  
}
boton.onclick = cambiarcolor; 
boton2= document.querySelector("#boton2");
function ocultar() {
    t1.style.display = "none";
 }
boton2.onclick = ocultar;
boton3= document.querySelector("#boton3");
function mostrar() {
    t1.style.display = "block";
 }
boton3.onclick = mostrar;


img1 = document.querySelector("#img1");
function ponerp() {
    img1.style.padding = "20px";
  }
img1.onmouseover = ponerp;


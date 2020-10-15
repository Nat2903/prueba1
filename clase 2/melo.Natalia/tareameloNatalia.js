//hacer un programa que reciba la edad de una persona y la salude dependiendo de la edad: si es menor a 12 años que le diga: hola nombre, si tiene entre 13 y 50 años que le diga buenos días nombre, si tiene mas de 50 años que le diga buenos días respetado nombre.

let e;
do{
    e = parseFloat(prompt(`ingrese su edad`));
} while(Number.isNaN(e)|| (e<=0));
let nombre;
do{
    nombre = prompt(`Ingrese su nombre`);
}while (nombre.length <=2)



if (e<12) {
    console.log(` Hola ${nombre}`);
  } else {
    if (e>50){
        console.log(`Buenos días respetado ${nombre}`);
    } 
    else {console.log(` Buenos días  ${nombre} `);
             }
  }
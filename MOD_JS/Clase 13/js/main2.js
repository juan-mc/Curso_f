/* mensaje();
function mensaje(){
    document.write('Hehe');
} */
//HOISTING: el metodo del navegador para ordenar el codigo para que no tenga errores y tenga logica
//se deben poner las funciones en constantes para que no se puedan alterar las funciones
const perro =function(nombre){
    console.log(nombre);
}
/* perro('juan'); */

//ARROW FUNCTION se omite la palabra function
const gato =(nombre) =>{
    document.write(nombre);
}
gato('Pedro');

//Cuando solo es una sola linea de codigo se pone asi 
const unaSola=(nombre)=> document.write(nombre);
unaSola('Raul');
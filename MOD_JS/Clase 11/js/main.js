/* var anchoDiv=100;
function pantalla(){
    var widthVentana=window.innerWidth;
    var heightVentana=window.innerHeight;
    anchoDiv++;
    document.getElementsByTagName('div')[0].style.width=anchoDiv+'px';
}
window.onresize=pantalla; */
/* var container=document.getElementById('container');
var nogara=document.getElementById('nogara'); */

//Cuando el elemento entra al contenedor se ejecuta la funcion
/* container.addEventListener('dragover',allowDrop);
container.addEventListener('drop',drop);

nogara.draggable=true;
nogara.addEventListener('dragstart',drag); */


function allowDrop(event){
    event.preventDefault();
    /* console.log(event); */
}
//para cuando se 
function drop(event){
    //obtiene una variable 
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    if(document.getElementById(data).dataset.cont == event.target.id ||event.target.id=='container2'){
        event.target.appendChild(document.getElementById(data));
    }
}
function drag(event){
    //se crea una variable text en donde se guarda el id de la imagen
    event.dataTransfer.setData("text",event.target.id);
}
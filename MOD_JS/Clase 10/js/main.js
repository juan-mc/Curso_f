document.getElementsByTagName('button')[0].addEventListener('click',mensaje);
document.getElementsByTagName('button')[1].addEventListener('click',mensaje);

//Funcion anonima
/* document.getElementsByTagName('button')[0].addEventListener('click',function(){
    console.log('hola5')
}); */

//No se recomienda manejar el evento onclick asi ya que se sobrescribe
//document.getElementsByTagName('button')[0].onclick=function(){console.log('hola')};
function mensaje(event){
/*     console.log(event);
    if (event.target.classList[0]=='perro') {
        event.target.classList.remove('perro');
    }
    else{
        event.target.classList.add('perro');
    } */
    event.target.classList.toggle('perro');
}
//Obtener un elemento de html por su etiqueta, si hay varias se maneja como un array
//document.getElementsByTagName('p')[0]

//Obtener elementos por su nombre de clase sin importar la etiqueta que sea
//document.getElementsByClassName('animals')
document.getElementsByTagName('body')[0].innerHTML='<main></main><div id="Contpopup"></div>'
var element1='<p class="animals">Gato c:</p>';
var element2='<p class="animals" id="dog">Perro c:</p>';
var element3='<a href="#" class="animals" onClick="pop()">Click</a>';
var popUp='<div id="popup"><img src="img/welcome.png" alt=""><p>ChillyWilly</p><span onclick="pop()">Da clic</span></div>'
var bandera=0;

document.getElementsByTagName('main')[0].innerHTML=element1+element2+element3;


function changeText(){
    document.getElementsByTagName('p')[0].innerHTML='<h2>perro</h2>';
}
function pop(){

    if(bandera==0)
    {
        document.getElementById('Contpopup').style.display='block';
        document.getElementById('Contpopup').innerHTML=popUp;
        bandera=1;
    }
    else{
        document.getElementById('Contpopup').style.display='none';
        bandera=0;
    }
}
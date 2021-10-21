var equis1='15';
var equis2=15;

if(equis1===equis2)
{
    console.log('Bienvenido');
}

var nombre =prompt('Ingresa tu nombre:');
var edad=prompt('¿cual es tu edad');
edad=parseInt(edad);
if(edad>=18){
    alert('Bienvenido '+nombre+' ,pudiste entrar porque tienes '+ edad);
}
else
{
    alert('Lo siento '+nombre+' eres menor de edad');
}


function user(){
    var name=prompt('¿cual es tu nombre?');
    var city=prompt('¿De donde vienes?');
    welcome(name,city);
}
//Scope: Hasta donde puede usarse una variable
function welcome(nombre,ciudad='jalisco'){
    //si no se pasa valor de cierto parametro, se le puede poner un valor por defecto 

    document.write('Bienvenido '+nombre+' Ya eres parte de la comunidad');
    document.write(' <br> Saludos a '+ciudad);

    function perfil(nombre){
        document.getElementsByTagName('body')[0].innerText='';
        document.write('User:'+nombre);
    }
    setTimeout(function(){
        perfil(nombre);
    },4000);
}
function suma(num1,num2)
{
    var total=num1+num2;
    return total;
}
/* user(); */
function mensaje(nombre){
    return 'Hola '+nombre+' wenas noches';
}
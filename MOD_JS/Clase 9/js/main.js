var textScreen='';
var total=0;
var tipoOp;
var num1,num2;
function mostrar(texto){
    document.getElementById('screen').innerText=texto;
}
function ingresar(numero){
    textScreen=textScreen+numero;
    mostrar(textScreen);
}
function borrar(){
    textScreen='';
    total=0;
    document.getElementById('screen').innerText='';
}
function sumar(){
    total+=parseInt(textScreen);
    mostrar(total);
    textScreen='';
    console.log(total);
    tipoOp=1;
}

function igual(){
    var res;
    switch (tipoOp) {
        case 1:
            sumar();
            break;
        default:
            break;
    }
}
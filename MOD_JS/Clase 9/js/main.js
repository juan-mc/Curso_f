var textScreen='';
var total=0;
var tipoOp='';
var num1;
var flagPoint=1;
const bmo= new Audio('media/BMO.mp3');
function mostrar(texto){
    document.getElementById('screen').innerText=texto;
}
function ingresar(numero){
        textScreen=textScreen+numero;
        mostrar(textScreen);
}
function punto(){
    if(flagPoint==1){
        textScreen=textScreen+'.';
        mostrar(textScreen);
        flagPoint=0;
    }
}
function borrar(){
    textScreen='';
    total=0;
    tipoOp='';
    document.getElementById('screen').innerText='';
}
function deleteCh(){
        textScreen=textScreen.toString();
        if(textScreen.length==1){
            borrar();
        }
        else{
            textScreen=textScreen.slice(0,-1);
            mostrar(textScreen);
        }  
}
function resolver(operacion){
    //Se activa la bandera de punto por si el usuario quiere seguir ingresando otro flotante
    flagPoint=1;
    //Para combinar operaciones
    if((tipoOp==operacion)||(tipoOp=='')){
        tipoOp=operacion;
    }
    else{
        igual();
        tipoOp=operacion;
    }
    //Por si el usuario presiona alguna tecla de operacion sin haber ingresado un numero
    if(textScreen=='')
    {
        console.log('entro a vacia');
    }
    else{
        if(textScreen.includes('.'))
        {
            num1=parseFloat(textScreen);
            total=parseFloat(total);
        }
        else{
            num1=parseInt(textScreen);
        }
    
        if(total=='')
        {
            total=num1;
            mostrar(total);
            textScreen='';
        }
        else{
            switch(operacion){
                case '+':
                    total+=num1;
                    break;
                case '-':
                    total-=num1;
                    break;
                case '*':
                    total*=num1;
                    break;
                case '/':
                    total/=num1;
                    break;
                default:
                    break;
            }
            mostrar(total);
            textScreen='';
        }
    }
}
function igual(){
    resolver(tipoOp);
    tipoOp='';
}
function SonidoIgual(){
    igual();
    bmo.play();
}
var textScreen='';
var total=0;
var tipoOp='';
var num1,num2;
var flagPoint=0;
function mostrar(texto){
    document.getElementById('screen').innerText=texto;
}
function ingresar(numero){
        textScreen=textScreen+numero;
        mostrar(textScreen);
}
function punto(){
    if(flagPoint==0){
        textScreen=textScreen+'.';
        mostrar(textScreen);
        flagPoint=1;
    }
}
function borrar(){
    textScreen='';
    total=0;
    tipoOp='';
    document.getElementById('screen').innerText='';
}
function resolver(operacion){
    flagPoint=0;
    tipoOp=operacion;
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
function igual(){
    resolver(tipoOp);
    tipoOp=0;
}
/* var screenCal='1234';
var total=0;

function clearScreen(){
    screenCal='0';
    updateScreen();
}
function updateScreen(){
    document.getElementById('screen').innerText=screenCal;
}
function deleteLastNum(){
    screenCal=screenCal.toString();
    if(screenCal.length==1){
        clearScreen();
    }
    else{
        screenCal=screenCal.slice(0,-1);
        updateScreen();
    }
}
function displayNum(num){
    if(screenCal==0){
        document.getElementById('screen').innerText=num;
        screenCal=num;
    }
    else{
        screenCal=screenCal+num;
        updateScreen();
    }
}
function suma(){
    if(total==0){
        var num1=screenCal;
    }
} */
/* screenCal.substring(0,screenCal.lenght); */
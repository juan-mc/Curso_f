/* var gato=true;
var pajaro=false;

if(pajaro){
    console.log('Tiene 4 patas');
}
else{
    console.log('No tiene 4 patas');
} */

//Ejercicio 1
/* var num=8;
if(prompt('Dime en que numero estoy pensando')!=num){ 
    alert('Nop, sigue intentando');
}
else{
    alert('Simon,si le atinaste');
} */

//operadores de comparacion
/* var dinero=prompt('Cuanto dinero traes?');
if(dinero>100){
    console.log('Te alcanza para 10 panes de morido');
}
else if(dinero>=90){
    console.log('Te alcanza pa 9 panes de morido');
}
else{
    console.log('No este molestando');
} */

/* var perro=prompt('cuanto dinero traes?');
if(perro!=0){
    console.log('Traes varo');
} */

//OPERADORES LOGICOS
/* var estudiante='Sebas';
var titulo=true;
var experiencia=false;
var edad=23;
if((titulo||experiencia) && edad>18){
    console.log('Puede conseguir trabajo');
}else{
    console.log('No hay chamba');
} */

var cantidad=prompt('Bienvenid@, cuantos helados va a llevar?');
var tipo='';
var op1=1.90;
var op2=1;
var op3=1.50;
var op4=0.75;
var op5=0.95;
var cuenta='';
var cupon='CALAVERITA'
var desc=1;
if((cantidad!='')&&(cantidad>0)){
    alert('1-El helado sin topping cuesta 1.90$.'+'\n'+
    '2-El topping de oreo cuesta 1$.'+'\n'+
   '3-El topping de KitKat cuesta 1.50$.'+'\n'+
   '4-El topping de brownie cuesta 0.75$.'+'\n'+
   '5-El topping de lacasitos cuesta 0.95$.');
    tipo=prompt('Que tipo de helado seria? (Elija del 1 al 5)');
    if((5>=tipo>=1)){
        if(tipo==1)
        {
            cuenta=cantidad*op1;
        }
        if(tipo==2)
        {
            cuenta=(cantidad*op2)+(cantidad*op1);
        }
        if(tipo==3)
        {
            cuenta=(cantidad*op3)+(cantidad*op1);
        }
        if(tipo==4)
        {
            cuenta=(cantidad*op4)+(cantidad*op1);
        }
        if(tipo==5)
        {
            cuenta=(cantidad*op5)+(cantidad*op1);
        }
    }
    else{
        alert('No elijio nada del menu');
    }
    if((prompt('Si tienes un cupon, ingresalo'))===cupon)
    {
        cuenta=cuenta-desc;
    }
    alert('Su total es de $'+cuenta);
}
else{
    alert('Salgase de la fila :)');
}

document.addEventListener('keydown',mensaje);
var marginTop = 0;
var marginLeft = 0;
var velocidad = 20;
var ancho=window.innerWidth;
var halcon=document.getElementById('Halcon');
var anchoImg=halcon.clientWidth;
function mensaje(){
    /* console.log(event); */

    /* var tamMarleft=halcon.style.marginLeft; */

    /* console.log('AnchoIMgtotal:'+parseInt(anchoImg+marginLeft)); */
    //Si rebasa el ancho de la pantalla,cuando va a la derecha
    if(parseInt(anchoImg+marginLeft)>=ancho){
        
        marginLeft=0;
        halcon.style.marginLeft = marginLeft + 'px';
        console.log('hacia derecha'+halcon.style.marginLeft);
    }
    if(parseInt(marginLeft)<0){
        
        marginLeft=ancho-anchoImg;
        halcon.style.marginLeft = marginLeft + 'px';
        console.log('hacia izq'+halcon.style.marginLeft);
    }


    switch (event.keyCode) {
        case 37:
            marginLeft -= velocidad;
            halcon.style.transform='rotate(-90deg)';
            halcon.style.marginLeft = marginLeft + 'px';
            /* console.log('izquierda'); */
            break;

        case 38:
            marginTop -= velocidad;
            halcon.style.transform='rotate(0deg)';
            halcon.style.marginTop = marginTop + 'px';
            /* console.log('arriba'); */
            break;
            
        case 39:
            marginLeft += velocidad;
            halcon.style.transform='rotate(90deg)';
            halcon.style.marginLeft = marginLeft + 'px';
            /* console.log('derecha'); */
            break; 

        case 40:
            marginTop += velocidad;
            halcon.style.transform='rotate(-180deg)';
            halcon.style.marginTop = marginTop + 'px';
           /*  console.log('abajo'); */
            break;


        default:
            break;
    }
    console.log('margin izqu:'+halcon.style.marginLeft);
}
const music= new Audio('media/starwars.mp3');
music.loop=true;
music.autoplay=true;
document.addEventListener('keydown',mensaje);
var marginTop = 0;
var marginLeft = 0;
var velocidad = 20;

function mensaje(){
    var ancho=window.innerWidth;
    var alto=window.innerHeight;
    var halcon=document.getElementById('Halcon');
    var anchoImg=halcon.clientWidth;
    //Si rebasa el ancho de la pantalla,cuando va a la derecha
    if(parseInt(anchoImg+marginLeft)>=ancho){
        
        marginLeft=0;
        halcon.style.marginLeft = marginLeft + 'px';
    }
    if(parseInt(marginLeft)<0){
        
        marginLeft=ancho-anchoImg;
        halcon.style.marginLeft = marginLeft + 'px';
    }
    if(parseInt(anchoImg+marginTop)>=alto){
        marginTop=0;
        halcon.style.marginTop = marginTop + 'px';
    }
    if(parseInt(marginTop)<0){
        marginTop=alto-anchoImg;
        halcon.style.marginTop = marginTop + 'px';
    }
    switch (event.keyCode) {
        case 37:
            marginLeft -= velocidad;
            halcon.style.transform='rotate(-90deg)';
            halcon.style.marginLeft = marginLeft + 'px';
            break;

        case 38:
            marginTop -= velocidad;
            halcon.style.transform='rotate(0deg)';
            halcon.style.marginTop = marginTop + 'px';
            break;
            
        case 39:
            marginLeft += velocidad;
            halcon.style.transform='rotate(90deg)';
            halcon.style.marginLeft = marginLeft + 'px';
            break; 

        case 40:
            marginTop += velocidad;
            halcon.style.transform='rotate(-180deg)';
            halcon.style.marginTop = marginTop + 'px';
            break;
        default:
            break;
    }
}
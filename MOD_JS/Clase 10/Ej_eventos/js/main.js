
document.addEventListener('keydown',mover);
var marginTop = 0;
var marginLeft = 0;
var velocidad = 20;
var controlM=0;
function mover(num){
    var ancho=window.innerWidth;
    var alto=window.innerHeight;
    var halcon=document.getElementById('Halcon');
    var anchoImg=halcon.clientWidth;
    var tecla=event.keyCode;
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
    if(ancho<=500){
        tecla=num;
    }
    switch (tecla) {
        case 37://izq
            marginLeft -= velocidad;
            halcon.style.transform='rotate(-90deg)';
            halcon.style.marginLeft = marginLeft + 'px';
            break;

        case 38://arriba
            marginTop -= velocidad;
            halcon.style.transform='rotate(0deg)';
            halcon.style.marginTop = marginTop + 'px';
            break;
            
        case 39://der
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
    playM();
}
function playM(){
    const msc= new Audio('media/starwars.mp3');
    if(controlM==0){
        console.log('entro');
        msc.play();
        msc.loop=true;
        msc.volume=0.4;
        controlM=1;
    } 
}
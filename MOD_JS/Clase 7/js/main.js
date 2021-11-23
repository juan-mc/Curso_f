/* var animal = {
    edad: 7,
    nombre: 'Pugberto',
    tipo: 'Perro',
    medicamentos: [
        'Parecetamol',
        'Desparacitante',
        'Cafiaspirinas',
        {
            alergias: [
                ['perro'],
                ['gato'],
                ['Perico']
            ]
        },
    ],
}; */


/* var facebook = {
    amigos: [
        { name: 'Chente', time: '5 weeks' },
        { name: 'ix', time: '2 months' }
    ],
    fotos: [
        {
            description: 'lorem askdjhasdkjh',
            tamaño: '300 x 500',
            comentarios: [
                {person: 'bryan', comment: 'alskdjalsdkjalskdj'},
                
            ]
        },
    ],
    estadoCivil: true,
}; */


var marginTop = 0;
var marginLeft = 0;
var velocidad = 20;

function mover(flecha) {

    var chikorita = document.getElementById('chikorita');
    /* marginTop = marginTop + velocidad; */

    switch (flecha) {
        case 0:
            marginLeft -= velocidad;
            chikorita.style.transform='scaleX(1)';
            chikorita.style.marginLeft = marginLeft + 'px';
            console.log('izquierda');
            break;

        case 1:
            marginTop -= velocidad;
            chikorita.style.transform='rotate(90deg)';
            chikorita.style.marginTop = marginTop + 'px';
            console.log('arriba');
            break;

        case 2:
            marginTop += velocidad;
            chikorita.style.transform='rotate(270deg)';
            chikorita.style.marginTop = marginTop + 'px';
            console.log('abajo');
            break;

        case 3:
            marginLeft += velocidad;
            chikorita.style.transform='scaleX(-1)';
            chikorita.style.marginLeft = marginLeft + 'px';
            console.log('derecha');
            break;
        case 4:
            marginLeft += velocidad;
            marginTop += velocidad;  
            chikorita.style.transform='rotate(225deg)';
            chikorita.style.marginLeft = marginLeft + 'px';
            chikorita.style.marginTop = marginTop + 'px';
            console.log('diagonal-abajo-derecha');
            break;
        case 5:
            marginLeft += velocidad;
            marginTop -= velocidad;  
            chikorita.style.transform='rotate(135deg)';
            chikorita.style.marginLeft = marginLeft + 'px';
            chikorita.style.marginTop = marginTop + 'px';
            console.log('diagonal-arriba-derecha');
            break;
        case 6:
            marginLeft -= velocidad;
            marginTop += velocidad;  
            chikorita.style.transform='rotate(-45deg)';
            chikorita.style.marginLeft = marginLeft + 'px';
            chikorita.style.marginTop = marginTop + 'px';
            console.log('diagonal-abajo-izq');
            break;
        case 7:
            marginLeft -= velocidad;
            marginTop -= velocidad;  
            chikorita.style.transform='rotate(45deg)';
            chikorita.style.marginLeft = marginLeft + 'px';
            chikorita.style.marginTop = marginTop + 'px';
            console.log('diagonal-abajo-izq');
            break;

        default:
            break;
    }

}
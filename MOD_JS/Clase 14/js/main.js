'use strict'
const frutas=[
    'Naranja',
    'Manzana',
    'Pera',
    'Platano',
    'Mandarina'
];

/* for (let index = 0; index < frutas.length; index++) {
    document.write(frutas[index]);
} */
const nombre='Pedrito fernandez :C'
const frutas2={
    name1:'Naranja',
    name2:'Manzana',
    name3:'Pera',
    name4:'Platano',
    name5:'Mandarina'
};
//ITERAR CON FOR OF 
//Para una cadena de texto
    /* for (const iterator of nombre) {
        console.log(iterator);
    } */
//sobre un objeto no se puede realizar por eso se usa un forin
    /* for (const iterator of frutas2) {
        console.log(iterator);
    } */
//FOR IN
//key te da el nombre de la propiedad 
    /* for (const key in frutas2) {
        console.log(frutas2[key]);
    } */
const sacarUsuario=()=>{
    let usuario=document.getElementById('nombre').value;
    return usuario;
}
const getDataUser=(info)=>{
    console.log(info);
    document.getElementById('nombre').value='';
}

const enviar=document.getElementById('enviar');
enviar.addEventListener('click',function(event){
    event.preventDefault();//para que no se refresque la pantalla
    getDataUser(sacarUsuario());
});

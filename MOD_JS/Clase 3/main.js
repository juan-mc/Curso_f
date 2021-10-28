/* var loQueSea=30;
switch (loQueSea) {
    case 30:
        console.log('hola');
        break;
    default:
        break;
}

document.write('He he'); */
/* var image='<img src="img/welcome.png" alt="">';
for(let index=0;index<5;index++){
    document.write(image);
} */
/* var tabla =5; */

/* for (let tabla=0;tabla<=10;tabla++)
{
    for (let index = 0; index <= 10; index++) 
    {
        document.write('<h3>'+tabla+'x'+index+'='+(index*tabla)+'</h3>');
    }
    document.write('<hr><br>');
} */
var num=prompt('Ingresa el tamaño de la piramide');
for(let index=0;index<num;index++){
    for(let index2=0;index2<=index;index2++){
        document.write('*');
    }
    document.write('<br>');
}
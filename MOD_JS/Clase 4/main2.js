/* var animales=['gato','perro','ornitorrinco','caballo','delfin','tortuga'];
var index=0;
do{
    document.write(animales[index]);
    document.write('<br>');
    index++;
}
while(index<animales.length) */
/* var numeros=[1,2,3,[4,5,6]]
document.write(numeros[3][1]) */
var imgs=[
'bicicleta',
'deporte',
'equipo-de-deporte',
'futbol-americano',
'gusano (2)'
]
var desc=[
    'Esto es una bici',
    'Balon de basket',
    'Balones de deportes',
    'Balon de soccer',
    'Este es un gusanito'
]
for(let index=0;index<imgs.length;index++){
    document.write('<div>'+'<img src="img/'+imgs[index]+'.png" alt="">'+'<p>'+desc[index]+'</p>'+'</div>');
}
const perros=[];
function constPerros(name,edad,fechaNac,color,contacto){
    this.name=name;
    this.edad=edad;
    this.fechaNac=fechaNac;
    this.color=color;
    this.contacto=contacto;
    this.setName=function(newName){
        this.name=newName;
    };
    this.getName=()=>this.name;
    this.getEdad=()=>this.edad;
    this.getFechaNac=()=>this.fechaNac;
    this.getColor=()=>this.color;
    this.getContacto=()=>this.contacto;
}
const newDog=document.getElementById('send').addEventListener('click',function(event){
    event.preventDefault();
    let info=[
        document.getElementById('nombre').value,
        document.getElementById('edad').value,
        document.getElementById('nacimiento').value,        
        document.getElementById('color').value,
        document.getElementById('correo').value,
    ]
    let perro1= new constPerros(info[0],info[1],info[2],info[3],info[4]);
    saveDog(perro1);
    displayDog(perro1);
});
const saveDog=(dog)=>{
    perros.push(dog);
}
const search=(email)=>{
    console.log('--------------------');
    for (const iterator of perros) {
        if(email==iterator.getContacto()){
            console.log(iterator);
        }
    }
}

const displayDog=(infoDog)=>{
    let container=document.getElementById('mostrar');
    let element=document.createElement('div');
    element.className='tarjeta';
    element.innerHTML=`
    <div>
    <p>Nombre: ${infoDog.getName()}</p>
    <p>Edad: ${infoDog.getEdad()}</p>
    <p>Fecha de nacimiento: ${infoDog.getFechaNac()}</p>
    <p>Color: ${infoDog.getColor()}</p>
    <p>Contacto: ${infoDog.getContacto()}</p>
    <button onclick="deleteDog(event)">Borrar</button>
    </div>
    <div class="imgcont">
    <img src="img/nose_dog.png" alt="">
    </div>
    `;
    container.appendChild(element);
}
const deleteDog=(event)=>{
    document.getElementById('mostrar').removeChild(event.target.parentNode.parentNode);
}
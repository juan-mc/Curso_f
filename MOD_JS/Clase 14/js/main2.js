const sacarUsuario=()=>{
    let usuario=document.getElementById('nombre').value;
    return usuario;
}
const getDataUser=(info)=>{
    /* console.log(info); */
    document.getElementById('nombre').value='';
    return info;
}
const putHmk=(tarea)=>{
    if(tarea!=''){
        let container=document.getElementById('tareas');
        let nuevaTarea=document.createElement('li');
        nuevaTarea.innerHTML=`
        <input type="checkbox" id="${tarea}">
        <label for="${tarea}">${tarea}</label>
        `;
        container.appendChild(nuevaTarea);
    }
}

const enviar=document.getElementById('enviar');
enviar.addEventListener('click',function(event){
    event.preventDefault();//para que no se refresque la pantalla
    putHmk(getDataUser(sacarUsuario()));
});
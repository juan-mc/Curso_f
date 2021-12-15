const urlApi='https://rickandmortyapi.com/api/character/?page=';

const cargarPers=(url)=>{
    fetch(url)
    .then(response=>response.json())//promesas
    /* .then(data=>console.log(data)) */
    //Primero se llama a la API para consumirla, una vez que da respuesta , esa informacion (response) se 
    //se convierte a un json para que js la pueda manejar, despues se cambia de nombre a 'data' y se manda por consola
    .then(data=>{
        let next=data.info.next+"";
        let previ=data.info.prev+"";
        pages(next,previ);

        for (let index = 0; index < data.results.length; index++) {
            let container=document.getElementsByTagName('main')[0];
            let element=document.createElement('div');
            element.className="container";
            console.log(data);
            element.innerHTML=`
            <div class="front">
            <img src="${data.results[index].image}" alt="">
            <p>${data.results[index].name}</p>
            </div>
            <div class="theback">
            <p>
                Status: ${data.results[index].status} 
                Species: ${data.results[index].species} 
                Gender: ${data.results[index].gender}
                Location: ${data.results[index].location.name}  
            </p>
            `;
            container.appendChild(element);
        }
    })
}
cargarPers(urlApi);

const pages=(sig,ant)=>{
    let nPage=sig.slice(sig.indexOf("=")+1,sig.length);
    let pPage=ant.slice(ant.indexOf("=")+1,ant.length);
    document.getElementById('sig').onclick = function() {
        let cont=document.getElementsByTagName('main')[0];
        while(cont.firstChild){
            cont.removeChild(cont.firstChild);
        }
        cargarPers(urlApi+nPage)
    };
    document.getElementById('ant').onclick = function() {
        let cont=document.getElementsByTagName('main')[0];
        while(cont.firstChild){
            cont.removeChild(cont.firstChild);
        }
        cargarPers(urlApi+pPage)
    };
}
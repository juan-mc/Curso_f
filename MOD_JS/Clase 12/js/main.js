var urlApi='https://rickandmortyapi.com/api/character';

fetch(urlApi)
    .then(response=>response.json())//promesas
    /* .then(data=>console.log(data)) */
//Primero se llama a la API para consumirla, una vez que da respuesta , esa informacion (response) se 
//se convierte a un json para que js la pueda manejar, despues se cambia de nombre a 'data' y se manda por consola
    .then(data=>{
        console.log(data.results.length);
        for (let index = 0; index < data.results.length; index++) {
            var container=document.getElementsByTagName('main')[0];
            var element=document.createElement('div');
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
                <br>Species: ${data.results[index].species} 
                <br>Gender: ${data.results[index].gender}
                <br>Location: ${data.results[index].location.name}  
            </p>
            <div>
            `;
            container.appendChild(element);
        }
    })


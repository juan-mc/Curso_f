let perro={
    name:'Milaneso',
    edad:7,
    color:'cafe'
};

//Constructor
/* const gatos=(name,edad,color)=>{
    let element={
        name:name,
        edad:edad,
        color:color
    }
    return element;
}
let gato1=gatos('gato',9,'cafe'); */

//Constructor de manera optimizada
function gatos(name,edad,color){
    //no se usa el return para devolver el objeto
    this.name=name;
    this.edad=edad;
    this.color=color;
    //Metodo : es una funcion dentro de un objeto
    this.setName=function(newName){
        this.name=newName;
    };
    this.getName=function(){
        return this.name;
    };
    this.getEdad=()=>this.edad;
}
//Se crea una instancia (cuando se crea un nuevo objeto usando el constructor)
let gato1=new gatos('gato123',9,'cafe');
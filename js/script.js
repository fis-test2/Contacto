
window.addEventListener("load",inicio);

function inicio(){
   document.getElementById("boton").addEventListener("click",agregarContacto);
    document.getElementById("botonConsultar").addEventListener("click",consultar);
}

function consultar(){
    let lista = document.getElementById("lista");
    lista.innerHTML = ""; 
    let datos = agenda.darTodos();
    //console.log(datos);
    for (elemento of datos ){
        let x = document.createElement("li");
        let nodo = document.createTextNode(elemento);
        x.appendChild(nodo);
        lista.appendChild(x);
    }
}
function agregarContacto(){
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let edad = document.getElementById("txtEdad").value;
  let telefono= document.getElementById("txtTelefono").value;
  agenda.agregar(new Contacto(nombre,apellido,edad,telefono));
  document.getElementById("formulario").reset();
  
  
}

class Contacto {
  constructor (_nombre, _apellido, _edad, _telefono){
      this.nombre = _nombre;
      this.apellido = _apellido;
      this.edad = _edad;
      this.telefono = _telefono;

  }
  toString(){
    return this.nombre + this.telefono;
  }
}
class Agenda {
    constructor(){
      this.lista = [];
    }
    agregar(unContacto){
      this.lista.push(unContacto);
      console.log('Agregado' + unContacto);
    }
    darTodos(){
      return this.lista;
    }

  }

let agenda = new Agenda();


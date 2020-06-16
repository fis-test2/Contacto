
window.addEventListener("load",inicio);

function inicio(){
   document.getElementById("boton").addEventListener("click",agregarContacto);
}

function agregarContacto(){
  nombreIngresado = document.getElementById("txtNombre").value;
  console.log(nombreIngresado);
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
    }
    darTodos(){
      return "hola";
    }

  }

let agenda = new Agenda();


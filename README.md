```javascript

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
      return this.lista;
    }

  }

```


```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale = 1.0">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
     <script src="/js/script.js"></script>
   
  </head>
    <body>
    
  <header>
      <h1> Contactos </h1>
  </header>
  <section>
    <h2> Ingreso de datos </h2>
    <article>
      <form id = "idformulario" action = "#" method="post">
        <label for = "txtNombre" >Nombre</label>
        <input type= "text" id= "txtNombre">
        <br>
         <label for = "txtApellido" >Apellido</label>
        <input type= "text" id= "txtApellido">
        <br>
        <label for ="txtEdad"> Edad </label>
        <input type = "number"  id="txtEdad" min="0" max="15">
        <br>
        <input type ="button" id="idBoton" value = "Agregar" >

      </form>
      <aside>
        <h4> Contactos Ingresados</h4>
        <ul id="lista">
        </ul>
         
      </aside>
    </article>
  </section>
  
  </body>
</html
```

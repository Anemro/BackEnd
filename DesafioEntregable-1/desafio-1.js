class Usuario {
    constructor(nombre, apellido, libros, mascotas){
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas
    }
  
    getFullName(){
      return `${this.nombre} ${this.apellido}`
    }
  
    addMascota(mascota){
      return this.mascotas.push(mascota)
    }
  
    countMascotas(){
      return this.mascotas.length
    }
  
    addBook(nombre, autor){
      this.libros.push({
        nombre: nombre,
        autor: autor
      })
    }
  
    getBookNames(){
      let nombres = []
      for (let i = 0; i <this.libros.length; i++){
        nombres.push(this.libros[i].nombre)
      }
      return nombres
    }
  }
  
  let nombre = 'Andres'
  let apellido = 'Rodriguez'
  let mascotas = []
  let libros = []
  let persona = new Usuario(nombre, apellido, libros, mascotas);
  
  persona.addMascota('Perro')
  persona.addMascota('Gato')
  persona.addBook('La hija del apocalipsis', 'Patrick Graham')
  persona.addBook('Alicia en el país de las maravillas', 'Lewis Carroll')
  
  console.log('Nombre completo :', persona.getFullName())
  console.log('Cantidad de mascotas: ', persona.countMascotas())
  console.log('Nombres de libros: ', persona.getBookNames())
  
  
  
  // Add info HTML
  
  let divRoot = document.getElementById('root')
  divRoot.innerHTML = `
    <p>Nombre de usuario: <b>${persona.getFullName()}</b></p>
    <p>Cantidad de mascotas: <b>${persona.countMascotas()}</b></p>
    <p id='mascotas'>Nombres de mascotas: <br></p>
    <p>Cantidad de libros: <b>${persona.libros.length}</b></p>
    <p id='libros'>Nombres de libros: <br></p>
  `
  
  let bookNames = persona.getBookNames()
  let mascotasName = persona.mascotas
  
  function mostrar(arr, id){
    if (arr === mascotasName){
      arr.forEach((nombre,index)=>{
        document.getElementById(id).innerHTML += `<b>${index+1}:</b> ${nombre} `
      })
    }else {
      arr.forEach((nombre,index)=>{
        document.getElementById(id).innerHTML += `<b>${index+1}:</b> ${nombre} 
        <b>Autor: </b>${persona.libros[index].autor}`
      })
    }
  }
  
  mostrar(bookNames, "libros")
  mostrar(mascotasName, "mascotas")


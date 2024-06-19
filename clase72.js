// let persona = {
//     nombre: 'Oscar',
//     apellido: 'Blanco',
//     edad: 38
// }

function Persona(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}

const persona1 = new Persona('Oscar','Blanco',38)

persona1.nacionalidad = 'Hondureño'

console.log(persona1)

const persona2 = new Persona('Diego','De Granda',35)

console.log(persona2)

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

console.log(persona1.saludar());
console.log(persona2.saludar())

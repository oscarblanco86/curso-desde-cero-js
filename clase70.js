/*
Estructura de datos 

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    Metodos
}

*/

const persona = {
    nombre: 'John',
    edad: 30,
    direccion: {
        calle: 'Av Insrugente 187',
        ciudad: 'CDMX'
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}


console.log(persona);
console.log(persona.nombre);
console.log(persona.saludar())

persona.telefono = '555-5555'
console.log(persona);

persona.despedir = () => {
    console.log('Adios,  mi numero es ',persona.telefono)
}

console.log(persona)
console.log(persona.despedir())

delete persona.telefono

console.log(persona)

delete persona.despedir()

console.log(persona);

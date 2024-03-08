// clase 4
console.log("Hola mundo");

// clase 5 anatomia de una variable
// No permitido
let c = 'wood'
let cda = 'Woody'
let pcAndy = 'Woody'

// Permitido
let primerTrasteoDeAndy = 'Woody'
let urlDelUsuario = 'https://www.google.com'
let idDelUsuario = '123456'

console.log(urlDelUsuario,idDelUsuario)

//Clase 6 Tipos de datos: Mutabilidad e inmutabilidad
//Primitivos: string, number, boolean, null, undefined, symbol bigint
//Complejos: object, array, funtion

let numero = 23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

//tipo de dato complejo mutable 

let usuario = { nombre: 'Pepito', edad: 15 }
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = 'Nuevo nombre'
}

let persona = { nombre: 'Antonio' }

console.log(persona)
cambiarNombre(persona)
console.log(persona)

//Clase 7 Paso por valor
//
let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let d = z
console.log(x,y,z,a,b,d)

a = 12
b = 'Platzi'
d = undefined
console.log(a,b,d)

//Paso por referencia

let frutas1 = ['manzana']
frutas1.push('pera')
console.log(frutas1)

let panes =['🍞']
let copiaDePanes = panes
panes.push('🥐')
// copiaDePanes.push('🥖')
console.log(panes,copiaDePanes)

//Clase 8 Paso por referencia
//

let frutas2 = {
    naranja: '🍊'
}

let vegetales = frutas2

vegetales.naranja = '🥦'

console.log(frutas2, vegetales)

let ropa = {
    shirt: '👕'
}

ropa.pantalon = '👖'

console.log(ropa)

//clase 9 Creacion de strings

const direccion = ' Calle falsa'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi direccion completa es ' + direccion+ ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi direccion completa es ' + ' ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

const nombre = 'Oscar'
const pais = 'Honduras'
const presentaicon = `Hola, soy ${nombre} de ${pais}`
console.log(presentaicon)

const primeraParte = 'Texto 1'
const segundaParte = 'texto 2'
const terceraParte = 'texto 3'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

const hobbie1 = 'Correr'
const hobbie2 = 'Leer'
const hobbie3 = 'Estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3)
console.log(hobbies)

const poema = 'Las rosas son rojas,\n' + 
'Las violestas son azules,\n' + 
'Caracter inesperado,\n' + 
'En la linea 86.' 

console.log(poema) 

const poema2 = `Las rosas son rojas,\n\ 
Las violestas son azules,\n\ 
Caracter inesperado,\n\ 
En la linea 86.` 

console.log(poema2) 

 

const poema3 = ` Las rosas son rojas,\n\ 

Las violestas son azules,\n\ 

Caracter inesperado,\n\ 

En la linea 86.` 

console.log(poema3) 

 

 

// Clase 11 Manipulacion de strings 

 

const stringPrimitivo = 'Soy un string primitivo' 

console.log(typeof stringPrimitivo) 

 

// const stringPrimitivoTambien = string('Soy un string primitivo tambien')

console.log(typeof stringPrimitivoTmbien) 

 

//string objeto 

const stringObjeto = new String('Soy un string objeto')

console.log(typeof stringObjeto) 

 

// acceder a caracteres 

const saludo = 'Hola, ¿Como esta?'

console.log(saludo[2]) 

// console.log(saludo.chartArt(2)) 

// console.log(saludo.infexOf('o')) 

// console.log(saludo.index('Cómo')) 

// console.log(saludo.index('como')) 

// console.log(saludo.lastIndexof('o')) 

// console.log(saludo.islice(3,5)) 

// console.log(saludo.length) 

// console.log(saludo.toLocaleUppercas()) 

// console.log(saludo.toLocaleLowerercas()) 

 

// const saludoDividio =saludo.split(' ') 

// console.log(saludoDvidido) 

// console.log(saludoDvidido[1]) 

 

const saludoConEspacios = ' Hola Mundo ' 

const saludoSinEspacios = saludoConEspacios.trim() 

console.log(saludoSinEspacios) 

 

const saludoOriginal = 'Hola Mundo' 

const nuevoSaludo = saludoOriginal.replace('Mundo', '<emoji>') 

 

console.log(nuevoSaludo) 

// 1. Tip[o entero y decimal

const entero = 42
const decimal = 3.14
console.log(typeof enteros, typeof decimal)

//2. notacion cientifica
const cientifico = 5e3

// 3. Infintos y NaN
const infinito = Infinity
const noEsNumero = NaN


// Operacion aritmeticas

// suma resta multiplicacion y division

const suma = 2 + 4
const resta = 4 - 4
const multi = 4 * 7
const division = 16 / 2

// Modulo y exponenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3

// precision

const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)


//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)


//null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)
    
// undefined
let name

console.log(name)

//symbol
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user ={}
user[ID] = '1234'
console.log(user)

//BigInt
const bigNumber = 12349823472377234
console.log(bigNumber)

const numberOfParticllesInTheUniverse = 1000000000000n
console.log(numberOfParticllesInTheUniverse)

//Clase 16

//Explicit type casting
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal1 = parseInt(binary,2)
console.log(decimal1)
console.log(typeof decimal1)

//Implicit Type Casting
const sum = '5' + 3
console.log(sum)

const sum1 = 5 + '3'
console.log(sum1)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log('-----------------')
console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log('-----------------')
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log('-----------------')
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)

const numero2 = '596'
const numero2Convertido = parseInt(numero2)
console.log(typeof numero2)
console.log(typeof numero2Convertido)

// clase 17
//User information
const username = 'codingAdventurer'
const fullName = 'Jhon Doe'
const age = 25
const isStudent = true

const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54321
}

// Hobbies

const hobbies1 = ['Coding','Reading','Gaming']

// Generating personalized bio
const personlizedBio = `Hola soy ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies1.join(', ')}.
Follow me for coding adventures!`

//print the user profile and bio
console.log(personlizedBio)

//Clase 18

function calculateDiscountPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) /100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage)

console.log('Original Price: $',originalPrice)
console.log('Dicount: ',discountPercentage,'%')
console.log('Price with discount: $',finalPrice)



//Clase 21 Funciiones puras e impuras

//Funciones puras

// Side Effects esto las convierte en impuras
// 1. Variables
// Parametros
// Solicitures HTTp
// Imprimier mensajes en pantalla o ocnosola
// Manipulacion del DOM
// Obtener la hora actual

function sum2 (a, b) {
    return a + b
}


// Funcion impuras

function sum3 (a, b) {
    console.log('A: ',a)
    return a + b
}

let total = 0

function sumWithSideEffect () {
    total += a
    return total
}

// Ejemplosde funciones puras

function square(x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)

//Identificador this


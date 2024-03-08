// Arrow function

// Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

// Diferencias y limitaciones:

//     No tiene sus propios enlaces a this o super y no se debe usar como métodos.
//     No tiene argumentos o palabras clave new.target.
//     No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
//     No se puede utilizar como constructor.
//     No se puede utilizar yield dentro de su cuerpo.

// Fuente: MDN

const greeting = function(name) {
    return `Hi, ${name}`
}

//Arrow function - explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

//Arrow function - implicit return

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, ${name} ${lastName}`

// Lexical Binding
const funtionalCharater = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
        // en arrow function no puede ejecutar this
    }
}

funtionalCharater.messageWithTraditionalFunction('With great power comes great responsaility')
funtionalCharater.messageWithArrowFunction('Beware of Doctor Octopus')

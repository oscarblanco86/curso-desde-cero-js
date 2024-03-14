// Ejercicio-practico-funciones.js

//Create PowerPullGirl objects

function PowerPullGirl (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false
    this.displayInfo = function () {
        console.log(`Powerpuff Girl Information: 
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `)
    }
    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become the leader of the Powerpuff Girls`)
    }
} 

const blossom = new PowerPullGirl('Blossom','Pink','Ice Breathe')
const buttercup = new PowerPullGirl('Buttercup','Green','Super Stength')
const bubble = new PowerPullGirl('Bubble','Blue','Fight')

blossom.displayInfo()
buttercup.displayInfo()
bubble.displayInfo()

buttercup.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubble.displayInfo()

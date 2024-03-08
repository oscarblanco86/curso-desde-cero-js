const personalizedMessage = () => 'Goodbye everybody!'

function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage = () => ownMessage
}


const falcon9Rocket = new Rocket('Falcon 9')
const falconHeavyRocket = new Rocket('Falcon Heavy')
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

const RocketWithArrowFunction = (name,ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Successful launch!'
const falcon9Rocjet1 = RocketWithArrowFunction('Falcon 9',personalizedMessageForArrowFunction)

console.group(falcon9Rocjet1.name)
console.group(falcon9Rocjet1.launchMessage())
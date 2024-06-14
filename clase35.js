const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt (
    prompt("Adivina el numero secreto entre el 1 al 10")
);

console.log(`Este es el numero con el que juegas ${numeroJugador}`)
if (numeroJugador === numeroSecreto) {
    console.log("felicidades, adiviniaste el numero secreto")
} else if (numeroJugador < numeroSecreto) {
    console.log("Tu numero",numeroJugador," tu numero es demasiado bajo, intenta de nuevo ",numeroSecreto)
} else if (numeroJugador > numeroSecreto) {
    console.log("Tu numero",numeroJugador," tu numero es demasiado alto, intenta de nuevo ",numeroSecreto)
}
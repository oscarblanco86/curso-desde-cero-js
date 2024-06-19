// Algorithmic tournament winner

function torunamenteWinner (competitions, results) {
    const scores = {}
    let winner = ''
    for (let i = 0; i < competitions.length; i++) {
        // const home = competitions[i][0];
        // const away = competitions[i][1];
        const [home,away] = competitions[i]
        const winningTeam = results[i] === 0 ? away : home
        scores[winningTeam] = (scores[winningTeam] || 0) + 3
        if (!winner || scores[winningTeam] > scores[winner]) {
            winner = winningTeam;
        }
    }

    return winner
}

const competitions = [
    ['javaScript','C#'],
    ['C#','Python'],
    ['Python','javaScript']
]

const results = [0,0,1]

console.log(torunamenteWinner(competitions,results))
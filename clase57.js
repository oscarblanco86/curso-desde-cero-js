//EX
const winningParticipants = [
  { id: 1, name: "Sarah", ticketNumber: 001 },
  { id: 2, name: "Isis", ticketNumber: 002 },
  { id: 3, name: "Jenny", ticketNumber: 003 },
  { id: 4, name: "Michelle", ticketNumber: 004 },
  { id: 5, name: "Gabbie", ticketNumber: 005 },
  { id: 6, name: "Sharon", ticketNumber: 006 },
  { id: 7, name: "Alice", ticketNumber: 007 },
];

function findWinnerByName(name) {
  const winner = winningParticipants.find(
    (participant) => participant.name === name
  )
    return winner || "No winner found with that name"
}

function findIndexWinnerByTicket(ticketNumber) {
  const index = winningParticipants.findIndex(
    (participant) => participant.ticketNumber === ticketNumber,
  ) 
    return index !== -1 ? index : "No winner found with that ticket number"
}

function displayWinnerInformation(winner) {
  // console.log(
  //   `The winner is ${winner.name} with ticket number ${winner.ticketNumber}`,
  // );
  console.log("Dsplay")
  if (
    winner !== undefined &&
    winner != null &&
    winner !== "No winner found with that name"
  ) {
    information = "1Winner information: " + winner
    return information
  } else {
    return "No winner found with that name"
  }
}

console.log('Find Winner: ',findWinnerByName("Alice"))
console.log('Find Index: ',findIndexWinnerByTicket(007))

console.log('Display index: ',displayWinnerInformation(findIndexWinnerByTicket(004)));
console.log('Display index: ',displayWinnerInformation(findIndexWinnerByTicket(015)));

console.log('Display info: ', displayWinnerInformation(findWinnerByName("Jenny")));
console.log('Display info: ', displayWinnerInformation(findWinnerByName("Sarahi")));



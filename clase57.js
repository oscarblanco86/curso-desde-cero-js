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
  return (winner = winningParticipants.find(
    (participant) =>
      participant.name === name || "No winner found with that name",
  ));
}

function findIndexWinnerByTicket(ticketNumber) {
  return (index =
    winningParticipants.find(
      (participant) => participant.ticketNumber === ticketNumber,
    ) || "No winner found with that ticket number");
}

function displayWinnerInformation(winner) {
  console.log(
    `2The winner is ${winner.name} with ticket number ${winner.ticketNumber}`,
  );
  if (
    winner !== undefined &&
    winner != null &&
    winner !== "No winner found with that name"
  ) {
    return "1Winner information: ", winner;
  } else {
    return "1No winner found with that name";
  }
}

console.log(displayWinnerInformation(findWinnerByName("oscar")));
// console.log(displayWinnerInformation(findIndexWinnerByTicket(001)));

// console.log(displayWinnerInformation(findWinnerByName("Sarahi")));
// console.log(displayWinnerInformation(findIndexWinnerByTicket(015)));

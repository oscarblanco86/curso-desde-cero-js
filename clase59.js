const transactions = [
  { id: 1, description: "Grocery Shopping", amount: -50 },
  { id: 2, description: "Salary deposit", amount: 2000 },
  { id: 3, description: "Utility Bill Payment", amount: -100 },
  { id: 4, description: "Online Purchase", amount: -30 },
];

// 4. Find a transaction by description

// const transacDecription = transactions.find(transaction => transaction.description === "Online Purchase")
// console.log('Specific transacion: ',transacDecription)

function findTransactionDescription(description) {
  const trans = transactions.find(transaction => transaction.description === description)
  console.log("Return reached")
  return trans || "No transaction found with that description"
}
console.log('Find Transaction: ',findTransactionDescription("Utility Bill Payment"))

//5. Find the index of a transaction by amount

const indexTransaction = transactions.findIndex(Transaction => Transaction.amount === -100)
console.log('Index Transaction: ',indexTransaction)

//6. update transaction descriptions

transactions.forEach(transaction => {
  if (transaction.amount < 0) {
     transaction.description = `Expense: ${transaction.description}` 
  } else {
     transaction.description = `Income: ${transaction.description}`
  }
})
console.log('New transactions table: ',transactions)
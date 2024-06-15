const transactions = [
  { id: 1, description: "Grocery Shopping", amount: -50 },
  { id: 2, description: "Salary deposit", amount: 2000 },
  { id: 3, description: "Utility Bill Payment", amount: -100 },
  { id: 4, description: "Online Purchase", amount: -30 },
];

// 1. Calculate Total Balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount,0)
console.log('Total blance is: ',totalBalance);


//2. Find the largest transation (income or expense)

const largestTransaction = transactions.reduce((maxTransaction,transaction) => {
  return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('Largest Transacion: ',largestTransaction)

//3. Filter purchas transactions
const purchaseTransaction = transactions.filter(transaction => transaction.amount < 0)
console.log('Purchase Transactions: ',purchaseTransaction)

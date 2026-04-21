class Wallet {
  #balance = 0;
  #transactions = [];

  deposit(amount) {
    this.#balance += amount;
    this.#processDepostite(amount);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Not Enough Dude');
      return;
    }
    this.#processsWithdraw(amount);
    this.#balance -= amount;
  }
  #processDepostite(amount) {
    console.log('Depositing amount: ' + amount);
    this.#transactions.push({
      type: 'deposite',
      amount: amount,
    });
  }
  #processsWithdraw(amount) {
    console.log('Withdrawing amount: ' + amount);
    this.#transactions.push({
      type: 'withdraw',
      amount: amount,
    });
  }
  get balance() {
    return this.#balance;
  }
  get transactions() {
    return this.#transactions;
  }
}
const wallet = new Wallet();
wallet.deposit(500);
wallet.withdraw(100);
console.log(wallet.transactions);
console.log(wallet.balance);

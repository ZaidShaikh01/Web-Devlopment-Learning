class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }
  deposit(amount) {
    this._balance += amount;
    this._processDepostite(amount);
  }
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not Enough Dude');
      return;
    }
    this._processsWithdraw(amount);
    this._balance -= amount;
  }
  _processDepostite(amount) {
    console.log('Depositing amount: ' + amount);
    this._transactions.push({
      type: 'deposite',
      amount: amount,
    });
  }
  _processsWithdraw(amount) {
    console.log('Withdrawing amount: ' + amount);
    this._transactions.push({
      type: 'withdraw',
      amount: amount,
    });
  }
  get balance() {
    return this._balance;
  }
  get transactions() {
    return this._transactions;
  }
}
const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);
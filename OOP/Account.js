class Account {
  // private properties
  #accountType = '';
  #ownerName = ``;
  #balance = 0;
  #pinNumber = ``;
  constructor(accountType, ownerName, pinNumber) {
    this.#accountType = accountType;
    this.#ownerName = ownerName;
    this.#pinNumber = pinNumber;
    console.log(
      `Thanks for opening account, dear ${this.ownerName}. We will be glad to serve you.`
    );
  }

  get accountType() {
    return this.#accountType;
  }

  get ownerName() {
    return this.#ownerName;
  }

  get balance() {
    return this.#balance;
  }

  balanceInfo() {
    console.log(`Balance for ${this.ownerName} is: ${this.balance}.`);
    return this;
  }

  deposit(balance) {
    this.#balance = this.balance + balance;
    console.log(
      `After depositing ${balance}, the net balance is: ${this.balance}.`
    );
    return this;
  }

  withdraw(balance) {
    if (this.balance > 0 && this.balance - balance >= 0) {
      this.#balance = this.balance - balance;
      console.log(
        `Withdrawn ${balance} from account. Now the net balance is: ${this.balance}.`
      );
    } else {
      console.log(`Insufficient fund in the account.`);
    }
    return this;
  }

  printInformation() {
    console.log(
      `Owner of the account is: ${this.ownerName} and the type of account is ${this.accountType}.`
    );
    return this;
  }
}

const salaryAccountArka = new Account('Salary Account', 'Arka Bhuiyan', '1234');
salaryAccountArka
  .deposit(50000)
  .withdraw(5000)
  .deposit(10000)
  .balanceInfo()
  .printInformation();

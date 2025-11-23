class BankAccount{
    #balance =0;
    deposit(amount){
        this.#balance = this.#balance+amount;
        return `the updated amount is ${this.#balance}`
    }
}
bankAccount = new BankAccount();
console.log(bankAccount.deposit(300));

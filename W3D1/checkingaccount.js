/*In addition to the attributes of Account, SavingsAccount
should have an interest variable, which is set in the constructor and has a getter and a setter
mehtod. It should also have an addInterest() method which deposits the interest amount
into the account. The calculation for the amount is balance * interest / 100 . Be sure to also
overwrite the toString() method, and create Mocha / Chai tests for the methods in
SavingsAccount. You do not have to test the methods that SavingsAccount receives
from Account, since they’ve already been tested in Account.
*/

class CheckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    get overdraftLimit() {
        return this._overdraftLimit;
    }

    set overdraftLimit(newLimit) {
        this._overdraftLimit = newLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (this._balance - amount <= -1 * this._overdraftLimit) {
            throw new Error("Insufficient funds, overdraft limit passed");
        }
        this._balance -= amount;
    }

    toString() {
        return super.toString() + " overdraft limit " + this._overdraftLimit;
    }

    endOfMonth() {
        let ms = "";
        if (this._balance < 0) {
            ms = "Warning, low balance"
        }

        return ms + " CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraftLimit;
    }

}
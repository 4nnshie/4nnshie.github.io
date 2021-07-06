/*In addition to the attributes of Account, SavingsAccount
should have an interest variable, which is set in the constructor and has a getter and a setter
mehtod. It should also have an addInterest() method which deposits the interest amount
into the account. The calculation for the amount is balance * interest / 100 . Be sure to also
overwrite the toString() method, and create Mocha / Chai tests for the methods in
SavingsAccount. You do not have to test the methods that SavingsAccount receives
from Account, since they’ve already been tested in Account.
*/

class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    set interest(newInterest) {
        this._interest = newInterest;
    }

    get interest() {
        return this._interest;
    }

    addInterest() {
        let int = this._balance * this._interest / 100;
        super.deposit(int);
        return int;
    }

    toString() {
        return super.toString() + " interest " + this._interest;
    }

    endOfMonth() {
        let addedInt = this.addInterest();
        return "Interest added SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + addedInt;
    }

}
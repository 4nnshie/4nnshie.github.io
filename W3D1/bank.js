class Bank {
    static nextNumber;

    constructor() {
        Bank.nextNumber = 0;
        this._accountsArray = [];
    }

    addAccount() {
        Bank.nextNumber++;
        this._accountsArray.push(new Account(Bank.nextNumber));
        return Bank.nextNumber;
    }

    addSavingsAccount(interest) {
        Bank.nextNumber++;
        this._accountsArray.push(new SavingsAccount(Bank.nextNumber, interest));
        return Bank.nextNumber;
    }

    addCheckingAccount(overdraft) {
        Bank.nextNumber++;
        this._accountsArray.push(new CheckingAccount(Bank.nextNumber, overdraft));
        return Bank.nextNumber;
    }

    closeAccount(number) {
        let indexOfAccount = this._accountsArray.findIndex(acc => acc.number === number);
        this._accountsArray.splice(indexOfAccount, 1);
    }

    findAccount(number) {
        return this._accountsArray[this._accountsArray.findIndex(acc => acc.number === number)];
    }

    accountReport() {
        let report = "";
        for (let i = 0; i < this._accountsArray.length; i++) {
            report = report + this._accountsArray[i].toString() + "\n";
        }
        return report;
    }

    endOfMonth() {
        let monthReport = "";
        for (let i = 0; i < this._accountsArray.length; i++) {
            monthReport = monthReport + this._accountsArray[i].endOfMonth() + "\n";
        }
        return monthReport;
    }

}
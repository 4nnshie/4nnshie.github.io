"use strict";

describe("Account", function () {
    let expNumber = 678234;
    let expectedBalance;
    let testAccount = new Account(expNumber);
    describe("Creates an account with the following values: number=678234, balance=0.0", function () {

        it(`The account ${expNumber}  was successfully created and it can get its number and balance`, function () {
            assert.equal(testAccount.number, expNumber);
            assert.equal(testAccount.balance, 0.0);
        });
        it("The account after deposit of $ 10.00", function () {
            expectedBalance = testAccount.balance + 10.00;
            testAccount.deposit(10.00);
            //assert.throws(testAccogetBunt.deposit(-10.00), RangeError);
            assert.equal(testAccount.balance, expectedBalance);
        });
        it("The account balance after withdraw of $ 5.00", function () {
            expectedBalance = testAccount.balance - 5.00;
            testAccount.withdraw(5.00);
            assert.equal(testAccount.balance, expectedBalance);
        });

        it("The account prints -> Account " + expNumber + " : balance " + 5.00, function () {
            const expected = "Account " + expNumber + " : balance " + 5.00;
            assert.equal(testAccount.toString(), expected);
        });
    });
});

describe("SavingsAccount", function () {
    let expNumber = 123567;
    let testSavingsAccount = new SavingsAccount(expNumber, 2);
    describe("Creates a savings account with the following values: number = 123567, balance = 0.0, interest = 2", function () {

        it(`The account ${expNumber}  was successfully created and it can get its number and balance and interest`, function () {
            assert.equal(testSavingsAccount.number, expNumber);
            assert.equal(testSavingsAccount.balance, 0.0);
            assert.equal(testSavingsAccount.interest, 2);
        });

        it("The account after setting interest of 3% ->$ 10.3", function () {
            testSavingsAccount.deposit(10.00);
            testSavingsAccount.interest = 3;
            const expectedBalance = testSavingsAccount.balance + (testSavingsAccount.balance * 3 / 100);
            testSavingsAccount.addInterest();
            //assert.throws(testAccount.deposit(-10.00), RangeError);
            assert.equal(testSavingsAccount.balance, expectedBalance);
        });

        it("The account prints -> Account " + expNumber + " : balance " + 10.3 + " interest " + 3, function () {
            const expected = "Account " + expNumber + " : balance " + 10.3 + " interest " + 3;
            assert.equal(testSavingsAccount.toString(), expected);
        });

    });
});

describe("CheckingAccount", function () {
    let expNumber = 101520;
    let testCheckingAccount = new CheckingAccount(expNumber, 5);
    describe("Creates a checking account with the following values: number = 101520, balance = 0.0, overdraft limit = 5", function () {

        it(`The account ${expNumber}  was successfully created and it can get its number and balance and overdraft limit`, function () {
            assert.equal(testCheckingAccount.number, expNumber);
            assert.equal(testCheckingAccount.balance, 0.0);
            assert.equal(testCheckingAccount.overdraftLimit, 5);
        });

        it("The account after overdraft $00.00 -> $ -2.00", function () {
            testCheckingAccount.overdraftLimit = 3;
            const expectedBalance = testCheckingAccount.balance + (testCheckingAccount.balance - 2.00);
            testCheckingAccount.withdraw(2.00)
            //assert.throws(testAccount.deposit(-10.00), RangeError);
            assert.equal(testCheckingAccount.balance, expectedBalance);
        });

        it("The account prints -> Account " + expNumber + " : balance " + -2 + " overdraft limit" + 3, function () {
            const expected = "Account " + expNumber + " : balance " + -2 + " overdraft limit " + 3;
            assert.equal(testCheckingAccount.toString(), expected);
        });
    });
});

describe("Bank", function () {
    let bank = new Bank();

    describe("Creates a bank with 3 accounts", function () {

        it("bank with starting account number initialized = 0", function () {
            assert.equal(Bank.nextNumber, 0);
        });

        it("Adds 1 normal account and do deposit", function () {
            assert.equal(bank.addAccount(), 1);
            bank.findAccount(1).deposit(100.00);
        });
        it("Adds 1 savings account", function () {
            assert.equal(bank.addSavingsAccount(), 2);
            bank.findAccount(2).deposit(100.00);
            bank.findAccount(2).interest = 3;
        });
        it("Adds 1 checking account", function () {
            assert.equal(bank.addCheckingAccount(), 3);
            bank.findAccount(3).deposit(100.00);
            bank.findAccount(3).overdraftLimit = 3;
            bank.findAccount(3).withdraw(102.00);
        });

        it("closes the normal account ", function () {
            bank.closeAccount(1);
            assert.equal(bank.findAccount(1), undefined);
        });

        console.log(bank.accountReport());
        console.log(bank.endOfMonth());

    });
});





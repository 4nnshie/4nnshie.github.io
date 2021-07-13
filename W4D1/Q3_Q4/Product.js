class Product {
    constructor(id, name, price, description) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = description;
        this._quantity = 0;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }

    set quantity(n){
        this._quantity=n;
    }


}
module.exports = Product;
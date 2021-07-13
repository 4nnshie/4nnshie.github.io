class MyCookie{
    constructor(key, value, cookie) {
        this._key = key;
        this._value = value;
        this._cookie = cookie;
    }

    get key() {
        return this._key;
    }

    get value() {
        return this._value;
    }

    get cookie() {
        return this._cookie;
    }
}
module.exports = MyCookie;
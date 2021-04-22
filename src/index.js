const {months, mons, days, dys} = require('./utils')

class D {
    constructor(...args) {
        this._date = new Date(...args)
    }
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return this._date.getFullYear() % 100
    }
    get month() {
        return months[this._date.getMonth()]
    }
    get mon() {
        return mons[this._date.getMonth()]
    }
    get day() {
        return days[this._date.getDay()]
    }
    get dy() {
        return dys[this._date.getDay()]
    }
    get date () {
        return this._date.getDate()
    }
    get hour() {
        return this._date.getHours()
    }
    get hr() {
        return this._date.getHours()
    }
    get minute() {
        return this._date.getMinutes()
    }
    get min() {
        return this._date.getMinutes()
    }
    get second() {
        return this._date.getSeconds()
    }
    get sec() {
        return this._date.getSeconds()
    }
}

module.exports = D

// var day = new D(2000, 12, 23)
// var n = day.getMonth()
// console.log(n)
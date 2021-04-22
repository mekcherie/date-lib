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

    format(dateFormat = 'D, m t, Y') {
      const dateDict = {
        Y: this.year,
        y: this.yr,
        M: this.month,
        m: this.mth,
        D: this.date,
        d: this.dt,
        H: this.hour,
        h: this.hr,
        I: this.minute,
        i: this.min,
        S: this.second,
        s: this.sec
      }
      let outputString = ''
    for (let i = 0; i < dateFormat.length; i++) {
      if (dateDict[dateFormat[i]] === undefined) {
        outputString += dateFormat[i]
      } else {
        outputString += dateDict[dateFormat[i]]
      }
    }

    return outputString
  }
  when () {
    const when = new D()
    const calcYear = this.year - when.year
    const calcMonth = this._date.getMonth() - when._date.getMonth() + (calcYear * 12)
    const calcDay = this._date.getDay() - when._date.getDay()
    const calcHours = this._date.getHours() - when._date.getHours() + (calcDay * 24)

    if (calcMonth > 11) {
      return `This is ${calcYear} year(s) from now`
    } else if (calcMonth < -11) {
      return `This was ${Math.abs(calcYear)} year(s) ago`
    } else if (calcMonth > 0) {
      return `This is ${calcMonth} month(s) from now`
    } else if (calcMonth < 0) {
      return `This was ${Math.abs(calcMonth)} month(s) ago`
    } else if (calcHours > 23) {
      return `This is ${Math.abs(calcDay)} day(s) from now`
    } else if (calcHours < -23) {
      return `This was ${Math.abs(calcDay)} day(s) ago`
    } else {
      return 'Enter a date: (Year, Month, Day, Hour, Minutes, Seconds)'
    }
  }
}

module.exports = D

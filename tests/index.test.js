const D = require('../src/index')
const {months, mons, days, dys} = require('../src/utils')

const today = new Date()
const d = new D(today)
const bday = new D(1999, 9, 31, 10, 47, 22)

test('D.year', () => {
  expect(d.year).toBe(today.getFullYear())
})

test('D.yr', () => {
  expect(d.yr).toBe(21)
})

test('D.month', () => {
    expect(d.month).toBe('April')
})

test('D.mon', () => {
    expect(d.mon).toBe('Apr')
})

test('D.day', () => {
  expect(bday.day).toBe('Sunday')
})

test('d.dy', () => {
  expect(d.dy).toBe('Wed')
})

test('D.date', () => {
  expect(d.date).toBe(today.getDate())
})

test('D.hour', () => {
  expect(d.hour).toBe(today.getHours())
})

test('D.hr', () => {
  expect(d.hr).toBe(today.getHours())
})

test('D.minute', () => {
  expect(d.minute).toBe(today.getMinutes())
})

test('D.min', () => {
  expect(d.min).toBe(today.getMinutes())
})

test('D.second', () => {
  expect(d.second).toBe(today.getSeconds())
})

test('D.sec', () => {
  expect(d.sec).toBe(today.getSeconds())
})

test('D.format', () => {
    expect(bday.format()).toBe("31, October, 1999")
})

// test('DDate.format', () => {
//     expect(bday.format('Y,y / M,m / D,d/ H,h / I,i / S,s')).toBe('1999,99 / October,oct / Sunday,sun / 31s / 10,1 / 47,4 / 22,2')
// })

test('DDate.when', () => {
    const now = new Date()
    now.setDate(now.getDate()+2)
    const twoDaysFromNow = new D(now)
    expect(twoDaysFromNow.when()).toBe('This is 2 day(s) from now')

})
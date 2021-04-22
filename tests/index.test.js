const D = require('../src/index')
const {months, mons, days, dys} = require('../src/utils')

const today = new Date()
const d = new D(today)
const bday = new D(1999, 9, 31)

test('D.year', () => {
  expect(d.year).toBe(today.getFullYear())
})

test('D.yr', () => {
  expect(d.yr).toBe(21)
})

test('D.month', () => {
    expect(d.month).toBe(months[0])
})

test('D.mon', () => {
  expect(d.mon).toBe(mons[3])
})

// test('D.day', () => {
//   expect(bday.day).toBe('Monday')
// })

// test('exDate.dy', () => {
//   expect(exDate.dy).toBe('Tue')
// })

// test('D.date', () => {
//   expect(E.date).toBe(today.getDate())
// })

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

// test('D.format', () => {
//   expect(exDate.format()).toBe('Tuesday, Nov 3, 1998')
// })

// test('exDate.format', () => {
//   expect(exDate.format('Y,y / M,m / D,d / t / H,h / I,i / S,s')).toBe('1998,98 / November,Nov / Tuesday,Tue / 3 / 01,1 / 01,1 / 01,1')
// })

// test('exDate.when', () => {
//   const now = new Date()
//   now.setDate(now.getDate()+2)
//   const twoDaysFromNow = new D(now)
//   expect(twoDaysFromNow.when()).toBe('This is 2 day(s) from now')
// })
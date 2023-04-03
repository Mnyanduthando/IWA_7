const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '\n----------------------------------'

// Only change below this line
const owed = `R ${parseInt(Math.abs(leoBalance) + Math.abs(sarahBalance)).toFixed(2).replace(/(\d)(?=(\d{3})+$)/g, 'R1 ')}`
const leo = `${leoName + " " + leoSurname.replace(/\s+/g," ") + "(Owed:  R "+ Math.abs(leoBalance) + ")"}\n`
const sarah = `${sarahName.replace(/\s+/g," ") + sarahSurname + " " + "(Owed: R " + Math.abs(sarahBalance) +")"}\n`
const total ="\n Total amount owed: "
const result = leo + sarah + divider  + total + owed + divider

console.log(result)
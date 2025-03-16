const { readFileSync, writeFileSync } = require('fs')

console.log('start')
function readWrite() {
  try {
    const first = readFileSync('./content/first.txt', 'utf8')
    const second = readFileSync('./content/second.txt', 'utf8')
    writeFileSync('./content/result-async.txt', `Here is the result : ${first}, ${second}`)
    console.log('done with this task')
  } catch (err) {
    console.log(err)
  }
}
readWrite()
console.log('starting next task')

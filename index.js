const Bot = require('./Bot.js')

const Radmer = new Bot('Radmer')
Radmer.register().then(() => {
  return Radmer.move(1, 0)
}).then(() => {
  return Radmer.scan()
}).then(console.log)

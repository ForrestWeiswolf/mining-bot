const Bot = require('./Bot.js')

const Radmer = new Bot('Radmer')
Radmer.register().then(() => {
  Radmer.move(1, 0)
})

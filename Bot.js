const { register, move } = require('./actions.js')

function Bot(callsign){
  this.callsign = callsign

  register(this.callsign)
}

module.exports = Bot
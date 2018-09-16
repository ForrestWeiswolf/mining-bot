const { register, move } = require('./actions.js')

function Bot(callsign) {
  this.callsign = callsign
}

Bot.prototype.register = function() {
  return register(this.callsign).then(loc => {
    this.loc = loc
  })
}

  register(this.callsign)
}

module.exports = Bot

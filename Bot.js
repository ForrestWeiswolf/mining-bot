const { register, move, scan } = require('./actions.js')

function Bot(callsign) {
  this.callsign = callsign
}

Bot.prototype.register = function() {
  return register(this.callsign).then(loc => {
    this.loc = loc
  })
}

// moves relative to crrent position - e.g. bot.move(-1, 0) moves the bot
// one space in the -X direction
Bot.prototype.move = function(x, y) {
  return move(this.callsign, this.loc.X + x, this.loc.Y + y).then(loc => {
    this.loc = loc
  })
}

Bot.prototype.scan = function() {
  return scan(this.callsign)
}

module.exports = Bot

const { register, move, scan, claim } = require('./actions.js')

function Bot(callsign) {
  this.callsign = callsign
  this.claimedNodes = {}
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

Bot.prototype.claim = function() {
  return claim(this.callsign).then(nodes => {
    nodes.forEach(node => {
      this.claimedNodes[node.Id] = node
    })
  })
}

module.exports = Bot

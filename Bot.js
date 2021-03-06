const { register, move, scan, claim, release, mine } = require('./endpoints.js')

function Bot(callsign) {
  this.callsign = callsign
  this.claimedNodes = {}
}

Bot.prototype.register = function() {
  return register(this.callsign).then(loc => {
    this.loc = loc
  })
}

// moves relative to current position - e.g. bot.move(-1, 0) moves the bot
// one space in the -X direction
Bot.prototype.move = function(x, y) {
  const destination = { x: this.loc.X + x, y: this.loc.Y + y }
  if (
    destination.x >= 100 ||
    destination.x < 0 ||
    destination.y >= 100 ||
    destination.y < 0
  ) {
    throw new Error('Coordinate out of bounds')
  } else {
    return move(this.callsign, this.loc.X + x, this.loc.Y + y).then(loc => {
      this.loc = loc
    })
  }
}

Bot.prototype.scan = function() {
  return scan(this.callsign).then(nodes => {
    console.log('scan', nodes)
    return nodes
  })
}

Bot.prototype.claim = function(nodeId) {
  return claim(this.callsign, nodeId).then(nodes => {
    nodes.forEach(node => {
      this.claimedNodes[node.Id] = node
    })
  })
}

Bot.prototype.release = function(nodeId) {
  if (this.claimedNodes[nodeId]) {
    release(this.callsign, nodeId)
    delete this.claimedNodes[nodeId]
  } else {
    throw new Error(`No claimed node with id ${nodeId}`)
  }
}

Bot.prototype.mine = function(nodeId) {
  if (this.claimedNodes[nodeId]) {
    mine(this.callsign, nodeId)
  } else {
    throw new Error(`No claimed node with id ${nodeId}`)
  }
}

module.exports = Bot

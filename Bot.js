const { register, move, scan, claim, release } = require('./actions.js')

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
  return move(this.callsign, this.loc.X + x, this.loc.Y + y).then(loc => {
    this.loc = loc
  })
}

Bot.prototype.scan = function() {
  return scan(this.callsign).then(nodes => {
    console.log('scan', nodes)
    return nodes
  })
}

Bot.prototype.claim = function(nodeId) {
  console.log('claiming...')
  return claim(this.callsign, nodeId).then(nodes => {
    nodes.forEach(node => {
      console.log('claim', node)
      this.claimedNodes[node.Id] = node
    })
  })
}

Bot.prototype.release = function(nodeId){
  if(this.claimedNodes[nodeId]){
    release(this.callsign, nodeId)
    delete this.claimedNodes[nodeId]
  }
}

module.exports = Bot

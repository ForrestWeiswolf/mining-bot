const Bot = require('./Bot.js')

const radmer = new Bot('radmer')
radmer.register().then(() => {
  return radmer.move(1, 0)
}).then(() => {
  return radmer.scan()
}).then(nodes => {
  if(nodes){
    return radmer.claim()
  }
}).then(() => {
  radmer.release(radmer.claimedNodes[0])
})

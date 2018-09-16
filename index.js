const Bot = require('./Bot.js')

const radmer = new Bot('radmer')
radmer
  .register()
  .then(() => {
    return radmer.move(1, 0)
  })
  .then(() => {
    return radmer.scan()
  })
  .then(nodes => {
    if (nodes[0]) {
      console.log(nodes[0])
      return radmer
        .claim(nodes[0].Id)
        .then(() => {
          return radmer.mine(nodes[0].Id)
        })
        .then(() => {
          return radmer.release(nodes[0].Id)
        })
    }
  })

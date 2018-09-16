const { register, move } = require('./actions.js')

register('Radmer').then(loc => {
  move('Radmer', loc.X, loc.Y + 1)
})

const request = require('./request.js')

function register(callsign) {
  if (typeof callsign !== 'string') {
    throw new TypeError(`Callsign should be a string - was ${callsign}`)
  } else if (callsign === '') {
    throw new Error('Callsign should not be empty string')
  } else {
    return request
      .post('/register', { callsign })
      .then(res => {
        return res.data.Status.Location
      })
      .catch(err => {
        console.error(err)
      })
  }
}

function move(callsign, x, y) {
  if (typeof x !== 'number' || typeof x !== 'number') {
    throw new TypeError(`Coordinates should be numbers - were ${x}, ${y}`)
  } else {
    request
      .post('/move', { callsign, x: String(x), y: String(y) })
      .catch(err => {
        console.error(err)
      })
  }
}

module.exports = { register, move }

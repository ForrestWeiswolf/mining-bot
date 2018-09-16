const request = require('./request.js')

function register(callsign) {
  if (typeof callsign !== 'string') {
    throw new TypeError(`Callsign should be a string - was ${callsign}`)
  } else if (callsign === '') {
    throw new Error('Callsign should not be empty string')
  } else {
    request
      .post('/register', { callsign })
      .then(res => {
        return res.data.Status.Location
      })
      .then(loc => {
        console.log(`registered with callsign ${callsign} at ${[loc.X, loc.Y]}`)
      })
      .catch(err => {
        console.error(err)
      })
  }
}

module.exports = { register }

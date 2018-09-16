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
    return request
      .post('/move', { callsign, x: String(x), y: String(y) })
      .then(res => {
        return res.data.Status.Location
      })
      .catch(err => {
        console.error(err)
      })
  }
}

function scan(callsign) {
  return request
    .post('/scan', { callsign })
    .then(res => {
      return res.data.Nodes
    })
    .catch(err => {
      console.error(err)
    })
}

function claim(callsign, nodeId) {
  return request
    .post('/claim', { callsign, node: nodeId })
    .then(res => {
      return res.data.Nodes
    })
    .catch(err => {
      console.error(err)
    })
}

function release(callsign, nodeId) {
  return request.post('/release', { callsign, node: nodeId }).catch(err => {
    console.error(err)
  })
}

function mine(callsign, nodeId) {
  return request.post('/mine', { callsign, node: nodeId }).catch(err => {
    console.error(err)
  })
}

module.exports = { register, move, scan, claim, release, mine }

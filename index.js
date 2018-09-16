const axios = require('axios')

const request = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 100,
})

function register(callsign) {
  if (typeof callsign !== 'string') {
    throw new TypeError(`Callsign should be a string - was ${callsign}`)
  } else if (callsign === '') {
    throw new Error('Callsign should not be empty string')
  } else {
    request.post('/register', { callsign }).catch(err => {
      console.error(err)
    })
  }
}

register('Radmer')

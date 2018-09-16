const axios = require('axios')
const process = require('process')

const request = axios.create({
  baseURL: process.env.SERVER,
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

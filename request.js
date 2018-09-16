const axios = require('axios')
const process = require('process')

const request = axios.create({
  baseURL: process.env.SERVER,
  timeout: 100,
})

module.exports = request
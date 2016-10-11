'use strict'
const monk = require('monk')

const db = monk('localhost/albums_development')

module.exports = db

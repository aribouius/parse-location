const Location = require('./Location')

module.exports = function parseLocation(url) {
  return url instanceof Location ? url : new Location(url)
}

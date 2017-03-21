import Location from './Location'

export default function parseLocation(url) {
  return url instanceof Location ? url : new Location(url)
}

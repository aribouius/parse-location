import { expect } from 'chai'
import Location from '../Location'
import parseLocation from '../parseLocation'

describe('parseLocation', () => {
  const url = '/foo?bar=bar#baz'

  it('returns Location instance', () => {
    const loc = parseLocation(url)
    expect(loc instanceof Location).to.equal(true)
  })

  it('returns arg when given instance of Location class', () => {
    const loc = new Location(url)
    expect(parseLocation(loc)).to.equal(loc)
  })
})

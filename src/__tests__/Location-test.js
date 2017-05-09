import { expect } from 'chai'
import Location from '../Location'

describe('Location', () => {
  const url1 = '/foo?bar=bar#baz'
  const url2 = 'http://test.com:3000/foo?bar=bar#baz'

  it('parses a query string when given a query object', () => {
    const loc = new Location({ query: { foo: 'foo' } })
    expect(loc.search).to.eql('?foo=foo')
  })

  it('ignores empty query objects when building query string', () => {
    const loc = new Location({ query: {} })
    expect(loc.search).to.eql('')
  })

  it('parses a query object when given a query string', () => {
    const loc = new Location({ search: '?foo=foo' })
    expect(loc.query).to.eql({ foo: 'foo' })
  })

  it('always return a query object', () => {
    expect(new Location('/foo').query).to.eql({})
  })

  it('is indifferent to trailing slashes', () => {
    expect(new Location('/foo').pathname).to.equal('/foo')
    expect(new Location('/foo/').pathname).to.equal('/foo/')
  })

  it('handles empty input', () => {
    expect(new Location('').pathname).to.equal('/')
    expect(new Location(null).pathname).to.equal('/')
    expect(new Location(undefined).pathname).to.equal('/')
    expect(new Location({}).pathname).to.equal('/')
  })

  describe(url1, () => {
    it('parses a href', () => {
      const loc = new Location(url1)
      expect(loc.href).to.equal(url1)
    })

    it('parses a pathname', () => {
      const loc = new Location(url1)
      expect(loc.pathname).to.equal('/foo')
    })

    it('parses a query string', () => {
      const loc = new Location(url1)
      expect(loc.search).to.equal('?bar=bar')
    })

    it('parses a query object', () => {
      const loc = new Location(url1)
      expect(loc.query).to.eql({ bar: 'bar' })
    })

    it('parses a hash', () => {
      const loc = new Location(url1)
      expect(loc.hash).to.equal('#baz')
    })
  })

  describe(url2, () => {
    it('parses a href', () => {
      const loc = new Location(url2)
      expect(loc.href).to.equal(url2)
    })

    it('parses a protocol', () => {
      const loc = new Location(url2)
      expect(loc.protocol).to.equal('http:')
    })

    it('parses a host', () => {
      const loc = new Location(url2)
      expect(loc.host).to.equal('test.com:3000')
    })

    it('parses a hostname', () => {
      const loc = new Location(url2)
      expect(loc.hostname).to.equal('test.com')
    })

    it('parses a port', () => {
      const loc = new Location(url2)
      expect(loc.port).to.equal('3000')
    })

    it('parses a pathname', () => {
      const loc = new Location(url2)
      expect(loc.pathname).to.equal('/foo')
    })

    it('parses a query string', () => {
      const loc = new Location(url2)
      expect(loc.search).to.equal('?bar=bar')
    })

    it('parses a query object', () => {
      const loc = new Location(url2)
      expect(loc.query).to.eql({ bar: 'bar' })
    })

    it('parses a hash', () => {
      const loc = new Location(url2)
      expect(loc.hash).to.equal('#baz')
    })
  })
})

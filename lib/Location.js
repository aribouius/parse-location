const { parse, stringify } = require('query-string')

const regex = /^(?:(https?:)\/\/)?([^:/]*)(?::([^/]*))?([^?]*)(\?[^#]+)?(#.+)?/

module.exports = function Location(loc) {
  let port
  let hash
  let query
  let search
  let pathname
  let hostname
  let protocol

  if (typeof loc === 'string') {
    [protocol, hostname, port, pathname, search, hash] = loc.match(regex).slice(1)
  } else {
    ({ protocol, hostname, protocol, pathname, search, query, hash } = loc)
  }

  port = port || ''
  hash = hash || ''
  protocol = protocol || ''
  hostname = hostname || ''
  pathname = pathname || ''
  search = search || (query ? `?${stringify(query)}` : '')
  query = query || (search ? parse(search) : {})

  Object.assign(this, {
    host: port ? `${hostname}:${port}` : hostname,
    port,
    hash,
    search,
    hostname,
    pathname,
    protocol,
    query,
    href: [
      protocol ? `${protocol}//` : null,
      hostname,
      port ? `:${port}` : null,
      pathname,
      search,
      hash,
    ].filter(v => v).join(''),
  })
}

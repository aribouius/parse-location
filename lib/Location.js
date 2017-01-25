const { parse, stringify } = require('query-string')

module.exports = function Location(loc) {
  let hash
  let query
  let search
  let pathname

  if (typeof loc === 'string') {
    [pathname, search, hash] = loc.match(/([^?]*)(\?[^#]+)?(#.+)?/).slice(1)
  } else {
    ({ pathname, search, query, hash } = loc)
  }

  hash = hash || ''
  search = search || (query ? `?${stringify(query)}` : '')
  pathname = pathname || ''

  Object.assign(this, {
    hash,
    search,
    pathname,
    query: query || (search ? parse(search) : {}),
    href: `${pathname}${search}${hash}`,
  })
}

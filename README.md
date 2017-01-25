# Parse Location

Creates browser-esque location objects.

## Installation
```bash
$ yarn add parse-location
```

## Usage
```javascript
import parseLocation from 'parse-location'

const location = parseLocation('http://localhost:3000/foo?bar=bar#baz')
// {
//   host: 'localhost'
//   hostname: 'localhost:3000'
//   href: 'http://localhost:3000/foo?bar=bar#baz'
//   pathname: '/foo',
//   query: { bar: 'bar' },
//   search: '?bar=bar',
//   hash: '#baz',
//   port: '3000',
//   protocol: 'http:',
// }

```

## License
MIT

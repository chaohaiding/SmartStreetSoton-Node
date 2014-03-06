var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
module.exports = {
  development: {
    db: 'mongodb://localhost/smartstreet',
    root: rootPath,
    app: {
      name: 'smartstreet'
    }
  },
  test: {
    db: 'mongodb://localhost/smartstreet',
    root: rootPath,
    app: {
      name: 'smartstreet'
    }

  },
  production: {}
}

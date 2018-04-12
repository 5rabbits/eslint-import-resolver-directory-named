const path = require('path')
const resolver = require('./index')

describe('resolver', function() {
  it('resolves directory named modules', function() {
    expect(resolver.resolve('./test/app', __filename)).toEqual({
      found: true,
      path: path.resolve('./test/app/app.js')
    })
  })

  it('forwards config to the node resolver', function() {
    expect(resolver.resolve('app', __filename)).toEqual({
      found: false,
    })

    expect(
      resolver.resolve('app', __filename, { moduleDirectory: ['test'] })
    ).toEqual({
      found: true,
      path: path.resolve('./test/app/app.js')
    })
  })
})

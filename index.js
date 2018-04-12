const path = require('path')
const nodeResolver = require('eslint-import-resolver-node')

exports.interfaceVersion = 2
exports.resolve = function resolve(source, file, config) {
  const defaultResolution = nodeResolver.resolve(source, file, config)

  if (defaultResolution.found) {
    return defaultResolution
  }

  return nodeResolver.resolve(source + '/' + path.basename(source), file, config)
}

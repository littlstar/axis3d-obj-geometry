const { Geometry } = require('axis3d')
const parse = require('geom-parse-obj')

class OBJGeometry extends Geometry {
  constructor(opts) {
    if ('object' != typeof opts) { opts = {} }
    if ('string' != typeof opts.source) {
      throw new TypeError("OBJGeometry: Expecting source to be a string.")
    }

    opts.complex = parse(opts.source)
    super(opts)
  }
}

module.exports = { OBJGeometry }

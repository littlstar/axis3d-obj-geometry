axis3d-obj-geometry
===================

Converts .OBJ source into an Axis3D Geometry instance.

## Installation

```sh
$ npm install axis3d axis3d-obj-geometry
```

## Usage

```js
const { OBJGeometry } = require('axis3d-obj-geometry')
const { Context } = require('axis3d')
const { Mesh } = require('axis3d/mesh')
const fs = require('fs')

const ctx = new Context()
const source = fs.readFileSync('/path/to/model.obj').toString()
const geometry = new OBJGeometry({source})
const mesh = new Mesh(ctx, {geometry})
```

## License

MIT

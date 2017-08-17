const { PerspectiveCamera } = require('axis3d/camera')
const { Geometry, Context } = require('axis3d')
const { Material } = require('axis3d/material')
const { Frame } = require('axis3d/frame')
const { Mesh } = require('axis3d/mesh')

const ready = require('domready')
const Stats = require('stats.js')
const quat = require('gl-quat')
const fs = require('fs')

const { OBJGeometry } = require('../')

const obj = String(fs.readFileSync(__dirname+'/table.obj'))
const ctx = new Context()

const geometry = new OBJGeometry({source: obj})
const material = new Material(ctx)
const camera = new PerspectiveCamera(ctx)
const frame = new Frame(ctx)
const stats = new Stats()
const mesh = new Mesh(ctx, {geometry})

const position = [1, 1, 1]
const rotation = quat.identity([])
const angle = quat.identity([])

ctx.on('error', (err) => console.error(err.stack || err))

ready(() => document.body.appendChild(stats.dom))
frame(() => stats.begin())
frame(scene)
frame(() => stats.end())

function scene({time}) {
  quat.setAxisAngle(angle, [0, 1, 0], 0.5*time)
  quat.slerp(rotation, rotation, angle, 0.5)
  camera({rotation, position}, () => {
    material({color: [0.2, 0.4, 0.6]}, () => {
      mesh()
    })
  })
}

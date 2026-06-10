<template>
  <div class="canvas-wrapper" ref="wrapper">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const wrapper = ref(null)
const canvas = ref(null)

let ctx
let W
let H
let t = 0
let animFrameId
let autoRY = 0
let mx = 0.5
let my = 0.5
let lastFire = 0

const N = 60
let nodes = []
let connections = []

function buildNetwork() {
  nodes = []
  connections = []

  for (let i = 0; i < N; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 0.3 + Math.pow(Math.random(), 0.6) * 0.7
    nodes.push({
      ox: Math.sin(phi) * Math.cos(theta) * r,
      oy: Math.sin(phi) * Math.sin(theta) * r,
      oz: Math.cos(phi) * r,
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      vz: (Math.random() - 0.5) * 0.0008,
      pulse: 0,
      ptime: Math.random() * 100,
      size: 2 + Math.random() * 3.5,
    })
  }

  for (let i = 0; i < N; i++) {
    const count = 2 + Math.floor(Math.random() * 4)
    const dists = []
    for (let j = 0; j < N; j++) {
      if (i === j) continue
      const dx = nodes[i].ox - nodes[j].ox
      const dy = nodes[i].oy - nodes[j].oy
      const dz = nodes[i].oz - nodes[j].oz
      dists.push({ j, d: Math.sqrt(dx * dx + dy * dy + dz * dz) })
    }
    dists.sort((a, b) => a.d - b.d)
    for (let k = 0; k < Math.min(count, dists.length); k++) {
      const j = dists[k].j
      const exists = connections.find(
        (c) => (c.a === i && c.b === j) || (c.a === j && c.b === i)
      )
      if (!exists) {
        connections.push({ a: i, b: j, sig: 0, sigT: 0, sigDir: 1 })
      }
    }
  }
}

function project(x, y, z, rx, ry) {
  const x1 = x * Math.cos(ry) + z * Math.sin(ry)
  const z1 = -x * Math.sin(ry) + z * Math.cos(ry)
  const y1 = y * Math.cos(rx) - z1 * Math.sin(rx)
  const z2 = y * Math.sin(rx) + z1 * Math.cos(rx)
  const fov = 2.8
  const scale = fov / (fov + z2)
  const cx = W * 0.52
  const cy = H * 0.48
  const R = Math.min(W, H) * 0.38
  return { px: cx + x1 * R * scale, py: cy + y1 * R * scale, z: z2, scale }
}

function firePulse() {
  const i = Math.floor(Math.random() * N)
  nodes[i].pulse = 1
  nodes[i].ptime = t
  const conns = connections.filter((c) => c.a === i || c.b === i)
  conns.forEach((c) => {
    if (Math.random() < 0.7) {
      c.sig = 1
      c.sigT = t
      c.sigDir = c.a === i ? 1 : -1
    }
  })
}

function maybefire() {
  if (t - lastFire > 0.9 + Math.random() * 0.8) {
    firePulse()
    if (Math.random() < 0.5) {
      setTimeout(firePulse, 200 + Math.random() * 300)
    }
    lastFire = t
  }
}

function draw() {
  animFrameId = requestAnimationFrame(draw)
  t += 0.012
  autoRY += 0.004
  ctx.clearRect(0, 0, W, H)

  const rx = (my - 0.5) * 0.7
  const ry = autoRY + (mx - 0.5) * 0.5

  nodes.forEach((n) => {
    n.ox += n.vx
    n.oy += n.vy
    n.oz += n.vz
    if (Math.abs(n.ox) > 1) n.vx *= -1
    if (Math.abs(n.oy) > 1) n.vy *= -1
    if (Math.abs(n.oz) > 1) n.vz *= -1
  })

  maybefire()

  const projected = nodes.map((n) => ({
    ...project(n.ox, n.oy, n.oz, rx, ry),
    n,
  }))

  const edgeData = connections
    .map((c) => {
      const A = projected[c.a]
      const B = projected[c.b]
      return { c, A, B, mz: (A.z + B.z) / 2 }
    })
    .sort((a, b) => a.mz - b.mz)

  edgeData.forEach(({ c, A, B }) => {
    const depth = ((A.z + B.z) / 2 + 1) / 2

    ctx.beginPath()
    ctx.moveTo(A.px, A.py)
    ctx.lineTo(B.px, B.py)
    ctx.strokeStyle = `rgba(60,60,60,${0.04 + depth * 0.1})`
    ctx.lineWidth = 0.5 + depth * 0.5
    ctx.stroke()

    if (c.sig > 0) {
      const age = t - c.sigT
      const dur = 0.9
      const prog = Math.min(age / dur, 1)

      if (prog >= 1) {
        c.sig = 0
      } else {
        const fromPt = c.sigDir === 1 ? A : B
        const toPt = c.sigDir === 1 ? B : A
        const sx = fromPt.px + (toPt.px - fromPt.px) * prog
        const sy = fromPt.py + (toPt.py - fromPt.py) * prog
        const tailP = Math.max(0, prog - 0.22)
        const tx = fromPt.px + (toPt.px - fromPt.px) * tailP
        const ty = fromPt.py + (toPt.py - fromPt.py) * tailP

        const g = ctx.createLinearGradient(tx, ty, sx, sy)
        g.addColorStop(0, 'rgba(30,30,30,0)')
        g.addColorStop(1, 'rgba(15,15,15,0.95)')
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(sx, sy)
        ctx.strokeStyle = g
        ctx.lineWidth = 2
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(10,10,10,0.9)'
        ctx.fill()

        if (prog > 0.92) {
          const targetIdx = c.sigDir === 1 ? c.b : c.a
          nodes[targetIdx].pulse = 1
          nodes[targetIdx].ptime = t
          const neighbours = connections.filter(
            (cc) => (cc.a === targetIdx || cc.b === targetIdx) && cc !== c
          )
          neighbours.forEach((cc) => {
            if (Math.random() < 0.55) {
              cc.sig = 1
              cc.sigT = t
              cc.sigDir = cc.a === targetIdx ? 1 : -1
            }
          })
        }
      }
    }
  })

  const sortedNodes = [...projected].sort((a, b) => a.z - b.z)
  sortedNodes.forEach(({ px, py, z, scale, n }) => {
    const depth = (z + 1) / 2
    const isPulsing = n.pulse && t - n.ptime < 0.5
    const pulseAge = isPulsing ? (t - n.ptime) / 0.5 : 1
    const r = n.size * scale * (0.7 + depth * 0.5)

    if (isPulsing) {
      const glow = ctx.createRadialGradient(px, py, 0, px, py, r * 5 * (1 - pulseAge * 0.3))
      glow.addColorStop(0, `rgba(40,40,40,${0.28 * (1 - pulseAge)})`)
      glow.addColorStop(1, 'rgba(40,40,40,0)')
      ctx.beginPath()
      ctx.arc(px, py, r * 5, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()
    }

    ctx.beginPath()
    ctx.arc(px, py, Math.max(r, 0.5), 0, Math.PI * 2)
    const alpha = isPulsing ? 0.95 : 0.25 + depth * 0.6
    ctx.fillStyle = isPulsing
      ? `rgba(10,10,10,${alpha})`
      : `rgba(80,80,80,${alpha})`
    ctx.fill()
  })
}

function onMouseMove(e) {
  if (!wrapper.value) return
  const r = wrapper.value.getBoundingClientRect()
  mx = (e.clientX - r.left) / r.width
  my = (e.clientY - r.top) / r.height
}

function resize() {
  if (!wrapper.value || !canvas.value) return
  const { width, height } = wrapper.value.getBoundingClientRect()
  W = canvas.value.width = width
  H = canvas.value.height = height
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()
  buildNetwork()
  draw()
  firePulse()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  cancelAnimationFrame(animFrameId)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.canvas-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  width: 62%;
  height: 100%;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 6%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 6%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
}

canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>

import { onMounted, onUnmounted, watch } from 'vue'

export const EFFECTS = ['brackets', 'nodes', 'lens', 'none']

function lerp(a, b, t) { return a + (b - a) * t }

// ── Effect: Geometric brackets ────────────────────────────────────────────────
function createBrackets(canvas) {
  const ctx = canvas.getContext('2d')
  let mx = window.innerWidth / 2, my = window.innerHeight / 2
  let cx = mx, cy = my, angle = 0, targetAngle = 0
  let animId

  function onMove(e) {
    mx = e.clientX
    my = e.clientY
    targetAngle = (e.clientX - window.innerWidth / 2) * 0.012
  }

  function drawBracket(x, y, size, rot, alpha) {
    const arm = size * 0.38
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rot)
    ctx.globalAlpha = alpha
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineWidth = 2.2
    ctx.lineCap = 'square'
    ctx.beginPath(); ctx.moveTo(-size, -size + arm); ctx.lineTo(-size, -size); ctx.lineTo(-size + arm, -size); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(size - arm, -size); ctx.lineTo(size, -size); ctx.lineTo(size, -size + arm); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(-size, size - arm); ctx.lineTo(-size, size); ctx.lineTo(-size + arm, size); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(size - arm, size); ctx.lineTo(size, size); ctx.lineTo(size, size - arm); ctx.stroke()
    ctx.beginPath(); ctx.arc(0, 0, 2.5, 0, Math.PI * 2); ctx.fillStyle = '#1a1a1a'; ctx.fill()
    ctx.restore()
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    cx = lerp(cx, mx, 0.1)
    cy = lerp(cy, my, 0.1)
    angle = lerp(angle, targetAngle, 0.08)
    drawBracket(cx, cy, 22, angle, 0.92)
    drawBracket(cx, cy, 36, -angle * 0.5, 0.35)
    animId = requestAnimationFrame(tick)
  }

  window.addEventListener('mousemove', onMove)
  tick()

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('mousemove', onMove)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

// ── Effect: Trailing neural nodes ─────────────────────────────────────────────
function createNodes(canvas) {
  const ctx = canvas.getContext('2d')
  const N = 5
  const nodes = Array.from({ length: N }, () => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }))
  let mx = nodes[0].x, my = nodes[0].y
  let animId

  function onMove(e) { mx = e.clientX; my = e.clientY }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    nodes[0].x = lerp(nodes[0].x, mx, 0.22)
    nodes[0].y = lerp(nodes[0].y, my, 0.22)
    for (let i = 1; i < N; i++) {
      nodes[i].x = lerp(nodes[i].x, nodes[i - 1].x, 0.18)
      nodes[i].y = lerp(nodes[i].y, nodes[i - 1].y, 0.18)
    }
    for (let i = 0; i < N - 1; i++) {
      ctx.beginPath()
      ctx.moveTo(nodes[i].x, nodes[i].y)
      ctx.lineTo(nodes[i + 1].x, nodes[i + 1].y)
      ctx.strokeStyle = `rgba(26,26,26,${0.55 - i * 0.08})`
      ctx.lineWidth = 1.5
      ctx.stroke()
    }
    for (let i = 0; i < N; i++) {
      const r = 6 - i * 0.6
      const alpha = 1 - i * 0.18
      ctx.beginPath(); ctx.arc(nodes[i].x, nodes[i].y, r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(26,26,26,${alpha * 0.88})`; ctx.fill()
      if (i === 0) {
        ctx.beginPath(); ctx.arc(nodes[i].x, nodes[i].y, r + 7, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(26,26,26,0.22)'; ctx.lineWidth = 1.2; ctx.stroke()
      }
    }
    animId = requestAnimationFrame(tick)
  }

  window.addEventListener('mousemove', onMove)
  tick()

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('mousemove', onMove)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

// ── Effect: Glass lens ────────────────────────────────────────────────────────
function createLens(canvas) {
  const ctx = canvas.getContext('2d')
  let mx = window.innerWidth / 2, my = window.innerHeight / 2
  let cx = mx, cy = my, lx = mx, ly = my
  let animId

  function onMove(e) { mx = e.clientX; my = e.clientY }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    lx = lerp(lx, mx, 0.055); ly = lerp(ly, my, 0.055)
    cx = lerp(cx, mx, 0.14);  cy = lerp(cy, my, 0.14)

    ctx.beginPath(); ctx.arc(lx, ly, 32, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(26,26,26,0.25)'; ctx.lineWidth = 1; ctx.stroke()

    ctx.beginPath(); ctx.arc(cx, cy, 20, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255,255,255,0.22)'; ctx.fill()
    ctx.strokeStyle = 'rgba(26,26,26,0.75)'; ctx.lineWidth = 2; ctx.stroke()

    const arm = 6
    ctx.strokeStyle = 'rgba(26,26,26,0.6)'; ctx.lineWidth = 1.6
    ctx.beginPath(); ctx.moveTo(cx - arm, cy); ctx.lineTo(cx + arm, cy); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx, cy - arm); ctx.lineTo(cx, cy + arm); ctx.stroke()

    ctx.beginPath(); ctx.arc(cx, cy, 2, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(26,26,26,0.7)'; ctx.fill()

    animId = requestAnimationFrame(tick)
  }

  window.addEventListener('mousemove', onMove)
  tick()

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('mousemove', onMove)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

// ── Composable ────────────────────────────────────────────────────────────────
export function useCursorEffect(canvasRef, effectId) {
  let cleanup = null

  function resize() {
    if (!canvasRef.value) return
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
  }

  function mount(id) {
    if (cleanup) { cleanup(); cleanup = null }
    if (!canvasRef.value || id === 'none') return
    resize()
    if (id === 'brackets') cleanup = createBrackets(canvasRef.value)
    if (id === 'nodes')    cleanup = createNodes(canvasRef.value)
    if (id === 'lens')     cleanup = createLens(canvasRef.value)
  }

  watch(effectId, (id) => mount(id), { immediate: false })

  onMounted(() => {
    window.addEventListener('resize', resize)
    mount(effectId.value)
  })

  onUnmounted(() => {
    if (cleanup) cleanup()
    window.removeEventListener('resize', resize)
  })
}

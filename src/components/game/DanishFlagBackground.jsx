import { useEffect, useRef, useMemo } from 'react'

function seededRng(seed) {
  let s = Math.abs((seed + 1) * 9301 + 49297) % 233280
  if (s === 0) s = 1
  return function () {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

// Draw a single Danish flag centred at (cx, cy), rotated by angle
function drawFlag(ctx, cx, cy, flagH, angle, strokeColor) {
  const flagW = flagH * 1.4

  // Nordic cross proportions (based on Dannebrog spec)
  const vx1 = flagW * 0.35   // vertical bar left edge
  const vx2 = flagW * 0.50   // vertical bar right edge
  const hy1 = flagH * 0.424  // horizontal bar top edge
  const hy2 = flagH * 0.576  // horizontal bar bottom edge

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(angle)
  ctx.lineJoin = 'miter'

  const x0 = -flagW / 2
  const y0 = -flagH / 2

  ctx.strokeStyle = strokeColor
  ctx.lineWidth = 1.5

  // 4 red-field quadrants
  ctx.fillStyle = 'rgba(180, 35, 35, 0.07)'
  const quads = [
    [x0,        y0,        vx1,         hy1],
    [x0 + vx2,  y0,        flagW - vx2, hy1],
    [x0,        y0 + hy2,  vx1,         flagH - hy2],
    [x0 + vx2,  y0 + hy2,  flagW - vx2, flagH - hy2],
  ]
  quads.forEach(([rx, ry, rw, rh]) => {
    ctx.beginPath()
    ctx.rect(rx, ry, rw, rh)
    ctx.fill()
    ctx.stroke()
  })

  // Cross bars (white field)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.10)'
  const cross = [
    [x0,       y0 + hy1, flagW,     hy2 - hy1],  // horizontal
    [x0 + vx1, y0,       vx2 - vx1, flagH],       // vertical
  ]
  cross.forEach(([rx, ry, rw, rh]) => {
    ctx.beginPath()
    ctx.rect(rx, ry, rw, rh)
    ctx.fill()
    ctx.stroke()
  })

  ctx.restore()
}

export default function DanishFlagBackground({ theme, seed }) {
  const canvasRef = useRef(null)

  // Generate stable flag layout for this seed
  const flags = useMemo(() => {
    const rng = seededRng(seed)
    return Array.from({ length: 24 }, () => ({
      xPct: rng() * 112 - 6,          // -6% → 106% of viewport width
      yPct: rng() * 112 - 6,          // -6% → 106% of viewport height
      size: 38 + rng() * 118,         // flag height 38px → 156px
      angle: (rng() * 2 - 1) * Math.PI, // full rotation range
    }))
  }, [seed])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    function draw() {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, w, h)
      flags.forEach(({ xPct, yPct, size, angle }) => {
        drawFlag(ctx, (xPct / 100) * w, (yPct / 100) * h, size, angle, theme.accent)
      })
    }

    draw()
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [flags, theme.accent])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

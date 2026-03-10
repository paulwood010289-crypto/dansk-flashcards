import { useEffect, useRef, useMemo } from 'react'

function seededRng(seed) {
  let s = Math.abs((seed + 1) * 9301 + 49297) % 233280
  if (s === 0) s = 1
  return function () {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

// Draw a single Spanish flag centred at (cx, cy), rotated by angle
function drawFlag(ctx, cx, cy, flagH, angle, strokeColor) {
  const flagW = flagH * 1.5

  // Spanish flag: three horizontal stripes — red (1/4), yellow (1/2), red (1/4)
  const stripe1H = flagH * 0.25  // top red
  const stripe2H = flagH * 0.50  // yellow
  // bottom red fills the rest

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(angle)
  ctx.lineJoin = 'miter'

  const x0 = -flagW / 2
  const y0 = -flagH / 2

  ctx.strokeStyle = strokeColor
  ctx.lineWidth = 1.5

  // Top red stripe
  ctx.fillStyle = 'rgba(198, 11, 30, 0.10)'
  ctx.beginPath()
  ctx.rect(x0, y0, flagW, stripe1H)
  ctx.fill()
  ctx.stroke()

  // Yellow stripe
  ctx.fillStyle = 'rgba(255, 196, 0, 0.12)'
  ctx.beginPath()
  ctx.rect(x0, y0 + stripe1H, flagW, stripe2H)
  ctx.fill()
  ctx.stroke()

  // Bottom red stripe
  ctx.fillStyle = 'rgba(198, 11, 30, 0.10)'
  ctx.beginPath()
  ctx.rect(x0, y0 + stripe1H + stripe2H, flagW, flagH - stripe1H - stripe2H)
  ctx.fill()
  ctx.stroke()

  // Outer border
  ctx.fillStyle = 'transparent'
  ctx.beginPath()
  ctx.rect(x0, y0, flagW, flagH)
  ctx.stroke()

  ctx.restore()
}

export default function SpanishFlagBackground({ theme, seed }) {
  const canvasRef = useRef(null)

  // Generate stable flag layout for this seed
  const flags = useMemo(() => {
    const rng = seededRng(seed)
    return Array.from({ length: 24 }, () => ({
      xPct: rng() * 112 - 6,
      yPct: rng() * 112 - 6,
      size: 38 + rng() * 118,
      angle: (rng() * 2 - 1) * Math.PI,
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

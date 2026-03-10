import { useEffect, useRef } from 'react'

const COLORS = ['#f5c518', '#e85d04', '#4cc9f0', '#7b2d8b', '#06d6a0', '#ff6b6b', '#ffd166', '#a8dadc']

function rand(min, max) { return Math.random() * (max - min) + min }

export default function Fireworks({ duration = 3000 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = []

    function launch() {
      const x = rand(canvas.width * 0.2, canvas.width * 0.8)
      const y = rand(canvas.height * 0.1, canvas.height * 0.5)
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const count = Math.floor(rand(60, 90))
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const speed = rand(2, 7)
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          radius: rand(2, 4),
          decay: rand(0.012, 0.022),
          gravity: 0.08,
        })
      }
    }

    // Launch a burst immediately and every ~700ms
    launch()
    const launchInterval = setInterval(launch, 700)

    let animId
    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += p.gravity
        p.vx *= 0.98
        p.alpha -= p.decay

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const stopTimeout = setTimeout(() => {
      clearInterval(launchInterval)
      // Let existing particles fade out
      setTimeout(() => {
        cancelAnimationFrame(animId)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }, 2000)
    }, duration)

    return () => {
      clearInterval(launchInterval)
      clearTimeout(stopTimeout)
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [duration])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        pointerEvents: 'none',
      }}
    />
  )
}

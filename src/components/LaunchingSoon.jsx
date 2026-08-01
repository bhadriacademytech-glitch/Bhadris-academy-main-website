import React from 'react'

const keyframes = [
  '@keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }',
  '@keyframes float1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, -40px); } }',
  '@keyframes float2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-40px, 30px); } }',
  '@keyframes float3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, 35px); } }',
  '@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }',
  '@keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 20px rgba(232,200,119,0.4), 0 0 40px rgba(232,200,119,0.15); } 50% { box-shadow: 0 0 30px rgba(232,200,119,0.7), 0 0 60px rgba(232,200,119,0.3); } }',
  '@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }',
  '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }',
  '@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }',
  '.launch-ring::after { content: ""; width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #e8c877, #b8944a); display: block; }',
  '.launch-dot:nth-child(2) { animation-delay: 0.15s; }',
  '.launch-dot:nth-child(3) { animation-delay: 0.3s; }',
  '.launch-whatsapp:hover { color: #e8c877; }',
  '@media (max-width: 480px) { .launch-ring { width: 68px; height: 68px; } }'
].join(' ')

export default function LaunchingSoon() {
  return (
    <div style={styles.wrap}>
      <style>{keyframes}</style>

      <div style={{ ...styles.orb, ...styles.orb1 }} />
      <div style={{ ...styles.orb, ...styles.orb2 }} />
      <div style={{ ...styles.orb, ...styles.orb3 }} />

      <div style={styles.content}>
        <div className="launch-ring" style={styles.ring} />

        <div style={styles.logo}>BHADRI'S ACADEMY</div>

        <p style={styles.eyebrow}>Something Special Is Coming</p>

        <h1 style={styles.title}>
          We're Launching <span style={styles.gold}>Soon</span>
        </h1>

        <p style={styles.sub}>
          Our new website is getting ready to go live — a fresh space for
          Strong Foundations and Bright Futures. Check back shortly.
        </p>

        <div style={styles.dots}>
          <div className="launch-dot" style={styles.dot} />
          <div className="launch-dot" style={styles.dot} />
          <div className="launch-dot" style={styles.dot} />
        </div>

        <div style={styles.badge}>Live in a few hours</div>

        
          <a href="https://wa.me/919632645625"
          target="_blank"
          rel="noreferrer"
          className="launch-whatsapp"
          style={styles.whatsapp}
        >
          Reach us on WhatsApp →
        </a>
      </div>

      <div style={styles.footer}>
        Powered by <span style={styles.footerBrand}>Ariar Technology</span>
      </div>
    </div>
  )
}

const styles = {
  wrap: {
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(120deg, #060f1e, #0a1829, #16264a, #0a1829, #060f1e)',
    backgroundSize: '300% 300%',
    animation: 'gradientMove 14s ease infinite',
    fontFamily: 'Georgia, serif',
    color: '#fff',
    textAlign: 'center',
    padding: '24px',
    zIndex: 9999,
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.35,
    pointerEvents: 'none',
  },
  orb1: {
    width: '320px',
    height: '320px',
    top: '8%',
    left: '8%',
    background: '#e8c877',
    animation: 'float1 9s ease-in-out infinite',
  },
  orb2: {
    width: '260px',
    height: '260px',
    bottom: '10%',
    right: '10%',
    background: '#4a6fa5',
    animation: 'float2 11s ease-in-out infinite',
  },
  orb3: {
    width: '200px',
    height: '200px',
    top: '55%',
    left: '65%',
    background: '#e8c877',
    opacity: 0.2,
    animation: 'float3 8s ease-in-out infinite',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '580px',
    animation: 'fadeUp 1s ease both',
  },
  ring: {
    width: '84px',
    height: '84px',
    margin: '0 auto 28px',
    borderRadius: '50%',
    border: '2px solid rgba(232, 200, 119, 0.25)',
    borderTopColor: '#e8c877',
    animation: 'spin 3s linear infinite, pulseGlow 2.5s ease-in-out infinite',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.36em',
    background: 'linear-gradient(90deg, #e8c877 0%, #fff6df 25%, #e8c877 50%, #fff6df 75%, #e8c877 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'shimmer 5s linear infinite',
    marginBottom: '30px',
  },
  eyebrow: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.32em',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: '16px',
  },
  title: {
    fontWeight: 500,
    fontSize: 'clamp(34px, 6.5vw, 58px)',
    lineHeight: 1.15,
    margin: 0,
    textShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
  },
  gold: {
    fontStyle: 'italic',
    background: 'linear-gradient(90deg, #e8c877, #fff6df, #e8c877)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'shimmer 4s linear infinite',
  },
  sub: {
    margin: '20px auto 0',
    maxWidth: '440px',
    fontSize: '16px',
    lineHeight: 1.75,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  dots: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    marginTop: '26px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#e8c877',
    animation: 'bounce 1.4s ease-in-out infinite',
  },
  badge: {
    display: 'inline-block',
    marginTop: '30px',
    padding: '11px 26px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#0a1829',
    background: 'linear-gradient(135deg, #fff6df, #e8c877)',
    borderRadius: '999px',
    animation: 'pulseGlow 2.5s ease-in-out infinite',
  },
  whatsapp: {
    display: 'block',
    marginTop: '24px',
    fontSize: '13.5px',
    letterSpacing: '0.02em',
    color: 'rgba(255, 255, 255, 0.55)',
    textDecoration: 'none',
  },
  footer: {
    position: 'absolute',
    bottom: '24px',
    left: 0,
    right: 0,
    zIndex: 2,
    fontSize: '10.5px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.35)',
  },
  footerBrand: {
    color: '#e8c877',
    fontWeight: 700,
  },
}
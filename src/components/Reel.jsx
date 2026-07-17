import { useRef, useState, useEffect } from 'react'

export default function Reel({ src, poster, tag }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [thumb, setThumb] = useState(poster || '')

  useEffect(() => {
    if (!src) return
    const video = document.createElement('video')
    video.src = src
    video.crossOrigin = 'anonymous'
    video.preload = 'metadata'
    video.muted = true
    video.playsInline = true

    video.addEventListener('loadeddata', () => {
      video.currentTime = 1
    })

    video.addEventListener('seeked', () => {
      const canvas = document.createElement('canvas')
      canvas.width  = video.videoWidth  || 400
      canvas.height = video.videoHeight || 700
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      try {
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8)
        setThumb(dataUrl)
      } catch (e) {
        console.warn('Could not capture thumbnail:', e)
      }
      video.src = ''
    })

    video.load()
  }, [src])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.play()
      setPlaying(true)
    }
  }

  if (!src) {
    return (
      <div className="reel reveal">
        <div className="reel__bg" />
        {thumb
          ? <div className="reel__poster" style={{ backgroundImage: 'url(' + thumb + ')' }} />
          : <div className="reel__poster" style={{ background: '#1a2a4a' }} />
        }
        <div className="reel__play" aria-hidden="true"><span>▶</span></div>
        <div className="reel__tag">{tag}</div>
      </div>
    )
  }

  return (
    <div className="reel reveal" onClick={toggle} style={{ cursor: 'pointer' }}>

      {/* Always visible dark bg — never blank */}
      <div className="reel__bg" />

      {/* Thumbnail — shown before play */}
      {thumb && (
        <div
          className="reel__poster"
          style={{
            backgroundImage: 'url(' + thumb + ')',
            opacity: playing ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        loop
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: playing ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        onEnded={() => setPlaying(false)}
      />

      {/* Play/Pause overlay */}
      <div
        className="reel__play"
        style={{
          opacity: playing ? 0 : 1,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <span>▶</span>
      </div>

      <div className="reel__tag">{tag}</div>
    </div>
  )
}
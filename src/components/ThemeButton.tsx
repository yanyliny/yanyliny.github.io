import { useState, useRef, useEffect } from 'react'
import { useTheme, type Theme } from '../context/ThemeContext'

const THEME_LABELS: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark',
  fluid: 'Fluid',
  atomic: 'Atomic',
  vaporwave: 'Vapor',
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
    </svg>
  )
}

export default function ThemeButton() {
  const { theme, toggleDark, surprise } = useTheme()
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isDark = theme !== 'light'

  // Close on outside click/tap (for mobile)
  useEffect(() => {
    if (!expanded) return
    function handleClick(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [expanded])

  return (
    <div
      ref={ref}
      className="relative"
      style={{ height: 36 }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Collapsed state — single pill with icon + label */}
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          height: 36,
          padding: '0 12px',
          borderRadius: 9999,
          border: '1px solid var(--border)',
          background: 'var(--card-bg)',
          backdropFilter: 'blur(8px)',
          color: 'var(--text-secondary)',
          fontSize: 10,
          fontWeight: 400,
          letterSpacing: '0.1em',
          textTransform: 'uppercase' as const,
          whiteSpace: 'nowrap' as const,
          cursor: 'pointer',
          opacity: expanded ? 0 : 1,
          transform: expanded ? 'scale(0.9)' : 'scale(1)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          pointerEvents: expanded ? 'none' as const : 'auto' as const,
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
        <span>{THEME_LABELS[theme]}</span>
      </div>

      {/* Expanded state — two buttons */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          gap: 0,
          height: 36,
          borderRadius: 9999,
          border: '1px solid var(--border)',
          background: 'var(--card-bg)',
          backdropFilter: 'blur(8px)',
          overflow: 'hidden',
          opacity: expanded ? 1 : 0,
          transform: expanded ? 'scale(1)' : 'scale(0.9)',
          transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          pointerEvents: expanded ? 'auto' as const : 'none' as const,
        }}
      >
        <button
          onClick={() => { toggleDark(); setExpanded(false) }}
          title={isDark ? 'Light mode' : 'Dark mode'}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            height: '100%',
            padding: '0 12px',
            border: 'none',
            background: 'transparent',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            whiteSpace: 'nowrap' as const,
            transition: 'color 0.15s, background 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)'
            e.currentTarget.style.background = 'var(--accent-subtle)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
          <span>{isDark ? 'Light' : 'Dark'}</span>
        </button>

        <div style={{ width: 1, height: 18, background: 'var(--border)', flexShrink: 0 }} />

        <button
          onClick={() => { surprise(); setExpanded(false) }}
          title="Surprise me with a random theme"
          aria-label="Surprise me with a random theme"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            height: '100%',
            padding: '0 12px',
            border: 'none',
            background: 'transparent',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            whiteSpace: 'nowrap' as const,
            transition: 'color 0.15s, background 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)'
            e.currentTarget.style.background = 'var(--accent-subtle)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <SparkleIcon />
          <span>Surprise</span>
        </button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import ThemeOverlay from './ThemeOverlay'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: 'https://zenithvintage.org', label: 'ZenithVintage', external: true },
    { path: 'https://www.youtube.com/@TheYanyLin', label: 'YouTube', external: true },
  ]

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 -z-10 dot-pattern"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient gradient orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--orb-1)' }}
        />
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'var(--orb-2)' }}
        />
      </div>

      {/* Theme overlay decorations */}
      <ThemeOverlay />

      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: 'var(--nav-bg)',
          borderBottom: '1px solid var(--nav-border)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 md:h-20">
            {/* Theme button — left */}
            <div className="flex-shrink-0">
              <ThemeButton />
            </div>

            {/* Nav links — center (desktop) */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex space-x-12">
                {navItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav-link ${
                        location.pathname === item.path ? 'active' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Spacer — right (desktop only) */}
            <div className="hidden md:block flex-shrink-0 w-24" />

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden ml-auto p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: 'var(--text-secondary)', background: 'none', border: 'none' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{
              backgroundColor: 'var(--nav-bg)',
              borderColor: 'var(--nav-border)',
            }}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link block py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link block py-2 ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="elegant-divider mb-8 mx-auto max-w-xs"></div>
            <a
              href="mailto:yl2884@cornell.edu"
              className="text-xs font-light tracking-wide mb-3 inline-block no-underline transition-colors duration-300"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              yl2884@cornell.edu
            </a>
            <p
              className="text-xs font-light tracking-[0.2em] uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              © {new Date().getFullYear()} Yan Jun Lin
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

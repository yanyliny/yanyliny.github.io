import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/youtube', label: 'YouTube' },
    { path: '/happenings', label: 'Happenings' },
  ]

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navigation */}
      <nav className="nav-glass sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-20">
            <div className="flex space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative inline-flex items-center px-1 pt-1 text-sm font-light tracking-widest uppercase transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-amber-900'
                      : 'text-gray-600 hover:text-amber-900'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-px left-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="premium-glass mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="elegant-divider mb-6 mx-auto max-w-xs"></div>
            <p className="text-sm text-gray-600 font-light tracking-wider">
              © {new Date().getFullYear()} Yan Jun Lin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

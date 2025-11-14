import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY

      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
        heroRef.current.style.opacity = `${1 - scrolled / 600}`
      }

      if (cardsRef.current) {
        cardsRef.current.style.transform = `translateY(${scrolled * -0.1}px)`
      }
    }

    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.createElement('div')
      particlesContainer.className = 'particles'

      // Fewer particles on mobile
      const particleCount = window.innerWidth < 768 ? 8 : 15

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = '0'
        particle.style.animationDelay = `${Math.random() * 20}s`
        particlesContainer.appendChild(particle)
      }

      document.body.appendChild(particlesContainer)

      return () => {
        document.body.removeChild(particlesContainer)
      }
    }

    window.addEventListener('scroll', handleScroll)
    const cleanup = createParticles()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cleanup()
    }
  }, [])

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section with Parallax */}
      <div ref={heroRef} className="text-center mb-16 sm:mb-24 mt-8 sm:mt-16 fade-in-warm parallax-slow">
        <div className="relative inline-block group">
          {/* Decorative corner ornaments - hidden on mobile */}
          <div className="corner-ornament corner-ornament-tl float-elegant hidden sm:block"></div>
          <div className="corner-ornament corner-ornament-br float-elegant hidden sm:block" style={{animationDelay: '1s'}}></div>

          <div className="relative px-8 sm:px-16 py-8 sm:py-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight text-gray-900 mb-4 tracking-tighter text-depth gradient-text">
              Yany Lin
            </h1>
            <div className="gold-accent mb-4 sm:mb-6 mx-auto max-w-xs sm:max-w-md"></div>
            <p className="text-lg sm:text-xl text-gray-700 font-light tracking-wide">
              BA, Cornell University
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto mb-12 sm:mb-20 fade-in-warm" style={{animationDelay: '0.2s'}}>
        <div className="premium-glass p-6 sm:p-10 rounded-sm hover-lift">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 text-center font-light">
            My research spans experimental fluid mechanics, medical ethics, and orthopaedic outcomes,
            exploring everything from acoustic bubble dynamics to transplant allocation frameworks.
            I also maintain zenithvintage.org, an archive of old music I'm collecting.
          </p>
        </div>
      </div>

      {/* Navigation Cards with 3D Effects */}
      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 stagger-elegant">
        <Link
          to="/projects"
          className="group luxury-card luxury-card-hover ambient-glow mouse-light p-8 sm:p-10 rounded-sm card-3d"
        >
          <div className="relative">
            <div className="mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-gray-900 mb-3 sm:mb-4 group-hover:text-amber-900 transition-colors duration-500 text-depth">
              Projects
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              Research in fluid mechanics, medical ethics, and biomechanics
            </p>
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 group-hover:text-amber-700 transition-colors">
              View work →
            </div>
          </div>
        </Link>

        <a
          href="https://zenithvintage.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group luxury-card luxury-card-hover ambient-glow mouse-light p-8 sm:p-10 rounded-sm card-3d"
        >
          <div className="relative">
            <div className="mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-gray-900 mb-3 sm:mb-4 group-hover:text-amber-900 transition-colors duration-500 text-depth">
              Zenith Vintage
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              Archive of old music I'm collecting
            </p>
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 group-hover:text-amber-700 transition-colors">
              Visit archive →
            </div>
          </div>
        </a>

        <Link
          to="/youtube"
          className="group luxury-card luxury-card-hover ambient-glow mouse-light p-8 sm:p-10 rounded-sm card-3d"
        >
          <div className="relative">
            <div className="mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-gray-900 mb-3 sm:mb-4 group-hover:text-amber-900 transition-colors duration-500 text-depth">
              YouTube
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              Videos about research, experiments, and projects
            </p>
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 group-hover:text-amber-700 transition-colors">
              Visit channel →
            </div>
          </div>
        </Link>

        <Link
          to="/happenings"
          className="group luxury-card luxury-card-hover ambient-glow mouse-light p-8 sm:p-10 rounded-sm card-3d"
        >
          <div className="relative">
            <div className="mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extralight text-gray-900 mb-3 sm:mb-4 group-hover:text-amber-900 transition-colors duration-500 text-depth">
              Happenings
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              Updates and current work
            </p>
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 group-hover:text-amber-700 transition-colors">
              See more →
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

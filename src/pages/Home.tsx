import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-24 mt-16 fade-in-warm">
        <div className="relative inline-block">
          {/* Decorative corner ornaments */}
          <div className="corner-ornament corner-ornament-tl"></div>
          <div className="corner-ornament corner-ornament-br"></div>

          <div className="relative px-16 py-12">
            <h1 className="text-7xl font-extralight text-gray-900 mb-4 tracking-tighter text-depth">
              Yany Lin
            </h1>
            <div className="gold-accent mb-6 mx-auto max-w-md"></div>
            <p className="text-xl text-gray-700 font-light tracking-wide">
              BA, Cornell University
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto mb-20 fade-in-warm" style={{animationDelay: '0.2s'}}>
        <div className="premium-glass p-10 rounded-sm hover-lift">
          <p className="text-lg leading-relaxed text-gray-800 text-center font-light">
            My research spans experimental fluid mechanics, medical ethics, and orthopaedic outcomes,
            exploring everything from acoustic bubble dynamics to transplant allocation frameworks.
            I also maintain zenithvintage.org, an archive of old music I'm collecting.
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-elegant">
        <Link
          to="/projects"
          className="group luxury-card luxury-card-hover ambient-glow p-10 rounded-sm"
        >
          <div className="relative">
            <div className="mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 mb-4 group-hover:text-amber-900 transition-colors duration-500 text-depth">
              Projects
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Research in fluid mechanics, medical ethics, and biomechanics
            </p>
            <div className="mt-6 text-sm text-gray-500 group-hover:text-amber-700 transition-colors">
              View work →
            </div>
          </div>
        </Link>

        <a
          href="https://zenithvintage.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group luxury-card luxury-card-hover ambient-glow p-10 rounded-sm"
        >
          <div className="relative">
            <div className="mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 mb-4 group-hover:text-amber-900 transition-colors duration-500 text-depth">
              ZenithVintage
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Archive of old music I'm collecting
            </p>
            <div className="mt-6 text-sm text-gray-500 group-hover:text-amber-700 transition-colors">
              Visit archive →
            </div>
          </div>
        </a>

        <Link
          to="/youtube"
          className="group luxury-card luxury-card-hover ambient-glow p-10 rounded-sm"
        >
          <div className="relative">
            <div className="mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 mb-4 group-hover:text-amber-900 transition-colors duration-500 text-depth">
              YouTube
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Videos about research, experiments, and projects
            </p>
            <div className="mt-6 text-sm text-gray-500 group-hover:text-amber-700 transition-colors">
              Visit channel →
            </div>
          </div>
        </Link>

        <Link
          to="/happenings"
          className="group luxury-card luxury-card-hover ambient-glow p-10 rounded-sm"
        >
          <div className="relative">
            <div className="mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 group-hover:w-20 transition-all duration-500"></div>
            </div>
            <h2 className="text-3xl font-extralight text-gray-900 mb-4 group-hover:text-amber-900 transition-colors duration-500 text-depth">
              Happenings
            </h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Updates and current work
            </p>
            <div className="mt-6 text-sm text-gray-500 group-hover:text-amber-700 transition-colors">
              See more →
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

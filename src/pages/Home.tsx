import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16 mt-8">
        <h1 className="text-6xl font-light text-gray-900 mb-3 tracking-tight">Yany Lin</h1>
        <p className="text-lg text-gray-600 font-light tracking-wide">
          BA, Cornell University
        </p>
      </div>

      <div className="prose prose-lg max-w-none mb-16">
        <p className="text-lg leading-relaxed text-gray-700 text-center font-light">
          My research spans experimental fluid mechanics, medical ethics, and orthopaedic outcomes,
          exploring everything from acoustic bubble dynamics to transplant allocation frameworks.
          I also maintain zenithvintage.org, an archive of old music I'm collecting and organizing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Link
          to="/projects"
          className="group block p-8 bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
            Projects
          </h2>
          <p className="text-gray-600 font-light">
            Research in fluid mechanics, medical ethics, and biomechanics
          </p>
        </Link>

        <a
          href="https://zenithvintage.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-8 bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
            ZenithVintage
          </h2>
          <p className="text-gray-600 font-light">
            Archive of old music, collected and organized
          </p>
        </a>

        <Link
          to="/philarchive"
          className="group block p-8 bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
            PhilArchive
          </h2>
          <p className="text-gray-600 font-light">
            Philosophy and normative decision theory
          </p>
        </Link>

        <Link
          to="/happenings"
          className="group block p-8 bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
            Happenings
          </h2>
          <p className="text-gray-600 font-light">
            Updates and current work
          </p>
        </Link>
      </div>
    </div>
  )
}

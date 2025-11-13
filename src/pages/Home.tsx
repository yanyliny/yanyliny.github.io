import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Yan Jun Lin</h1>
        <p className="text-xl text-gray-600 italic">
          Physics, medicine, and ethics, stitched together.
        </p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-lg leading-relaxed text-gray-700">
          I am an undergraduate at Cornell who likes building quantitative models of messy
          biological systems and then asking whether our policies and practices are actually
          fair. My work spans bubble dynamics, orthopaedic outcomes, transplant allocation
          ethics, and tibial impact biomechanics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Link
          to="/projects"
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Projects and Publications
          </h2>
          <p className="text-gray-600">
            Research spanning fluid mechanics, orthopaedics, and medical ethics
          </p>
        </Link>

        <Link
          to="/blog"
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Blog</h2>
          <p className="text-gray-600">
            Thoughts on science, modeling, and fairness
          </p>
        </Link>

        <Link
          to="/philarchive"
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            PhilArchive
          </h2>
          <p className="text-gray-600">
            Philosophy work and archived papers
          </p>
        </Link>

        <Link
          to="/about-us"
          className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">About Us</h2>
          <p className="text-gray-600">
            Life beyond research
          </p>
        </Link>
      </div>
    </div>
  )
}

export default function YouTube() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-light text-gray-900 mb-12 tracking-tight">YouTube</h1>

      <div className="prose prose-lg max-w-none font-light">
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          I share videos about my research, experiments, and other projects on YouTube.
        </p>

        <div className="bg-white border border-gray-200 p-8 my-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">
            Visit My Channel
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Check out my latest videos and subscribe to follow along:
          </p>
          <a
            href="https://www.youtube.com/@TheYanyLin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors font-light"
          >
            Visit YouTube Channel →
          </a>
        </div>
      </div>
    </div>
  )
}

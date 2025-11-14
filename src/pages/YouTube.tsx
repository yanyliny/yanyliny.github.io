export default function YouTube() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-8 sm:mb-12 tracking-tight">YouTube</h1>

      <div className="prose prose-lg max-w-none font-light">
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
          I share videos about my research, experiments, and other projects on YouTube.
        </p>

        <div className="bg-white border border-gray-200 p-6 sm:p-8 my-8 sm:my-12">
          <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">
            Visit My Channel
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            Check out my latest videos and subscribe to follow along:
          </p>
          <a
            href="https://www.youtube.com/@TheYanyLin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors font-light text-sm sm:text-base"
          >
            Visit YouTube Channel →
          </a>
        </div>
      </div>
    </div>
  )
}

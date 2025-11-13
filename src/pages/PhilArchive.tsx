export default function PhilArchive() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-light text-gray-900 mb-12 tracking-tight">PhilArchive</h1>

      <div className="prose prose-lg max-w-none font-light">
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          I archive philosophy work on PhilArchive, focusing on normative decision
          theory, medical ethics, and the intersection of consequentialist reasoning with
          deontological constraints.
        </p>

        <div className="bg-white border border-gray-200 p-8 my-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">
            View My PhilArchive Profile
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For a complete list of my philosophy papers and preprints, visit my PhilArchive
            profile:
          </p>
          <a
            href="YOUR_PHILARCHIVE_URL_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors font-light"
          >
            Visit PhilArchive Profile →
          </a>
          <p className="text-sm text-gray-500 mt-6 font-light">
            (Please update YOUR_PHILARCHIVE_URL_HERE with your actual PhilArchive profile URL)
          </p>
        </div>

        <h2 className="text-2xl font-light text-gray-900 mb-6 mt-12">
          Research Areas
        </h2>
        <ul className="space-y-2 text-gray-700 leading-relaxed mb-12">
          <li>Normative decision theory under uncertainty</li>
          <li>Medical ethics and resource allocation</li>
          <li>Harm, fairness, and catastrophic risk in policy contexts</li>
          <li>Constrained optimization frameworks combining consequentialist and deontological reasoning</li>
          <li>Equity-efficiency trade-offs in scarce resource distribution</li>
        </ul>

        <h2 className="text-2xl font-light text-gray-900 mb-6">
          Related Work
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Much of my formal philosophy work intersects with my empirical research in medical
          ethics, particularly the{' '}
          <a href="/projects" className="text-gray-900 hover:text-gray-600 underline">
            Harm-Threshold Utilitarianism
          </a>{' '}
          framework for organ transplant allocation.
        </p>
      </div>
    </div>
  )
}

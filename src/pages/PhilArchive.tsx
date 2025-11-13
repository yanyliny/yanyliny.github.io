export default function PhilArchive() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">PhilArchive</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          I archive some of my philosophy work on PhilArchive, focusing on normative decision
          theory, medical ethics, and the intersection of consequentialist reasoning with
          deontological constraints.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            View My PhilArchive Profile
          </h2>
          <p className="text-gray-700 mb-4">
            For a complete list of my philosophy papers and preprints, visit my PhilArchive
            profile:
          </p>
          <a
            href="YOUR_PHILARCHIVE_URL_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Visit PhilArchive Profile →
          </a>
          <p className="text-sm text-gray-500 mt-4">
            (Please update YOUR_PHILARCHIVE_URL_HERE with your actual PhilArchive profile URL)
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Research Areas
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>
            Normative decision theory under uncertainty
          </li>
          <li>
            Medical ethics and resource allocation
          </li>
          <li>
            Harm, fairness, and catastrophic risk in policy contexts
          </li>
          <li>
            Constrained optimization frameworks combining consequentialist and deontological
            reasoning
          </li>
          <li>
            Equity-efficiency trade-offs in scarce resource distribution (transplantation,
            triage, etc.)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          Related Work
        </h2>
        <p className="text-gray-700 mb-4">
          Much of my formal philosophy work intersects with my empirical research in medical
          ethics, particularly the{' '}
          <a href="/projects" className="text-blue-600 hover:text-blue-800">
            Harm-Threshold Utilitarianism
          </a>{' '}
          framework for organ transplant allocation.
        </p>
        <p className="text-gray-700">
          For more context on how I think about these issues, see my{' '}
          <a href="/blog" className="text-blue-600 hover:text-blue-800">
            blog posts
          </a>
          , especially{' '}
          <a
            href="/blog/transplant-allocation-ethical-thresholds"
            className="text-blue-600 hover:text-blue-800"
          >
            "Why Transplant Allocation Needs Explicit Ethical Thresholds"
          </a>
          .
        </p>
      </div>
    </div>
  )
}

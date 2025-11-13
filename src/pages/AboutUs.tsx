export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Outside of research and classes, I spend most of my time with my girlfriend. We met in
          college, and a lot of what I do in science and medicine is anchored in wanting a life
          that feels grounded, not just productive.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          This page is mostly a reminder to myself that there is more to life than figures and
          p-values.
        </p>

        <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 text-center my-8">
          <div className="text-gray-500 mb-4">
            <svg
              className="w-24 h-24 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-gray-600 italic">
            Photo placeholder - Add your couple photo here
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Upload your image and reference it in the src/pages/AboutUs.tsx file
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            A Note on Privacy
          </h2>
          <p className="text-gray-700">
            This page is intentionally minimal and personal. If you'd like to add more details
            about shared interests, travel, or other aspects of your life together, you can
            edit the content in <code className="bg-white px-2 py-1 rounded text-sm">src/pages/AboutUs.tsx</code>.
          </p>
        </div>
      </div>
    </div>
  )
}

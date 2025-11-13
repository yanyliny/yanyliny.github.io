import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      <p className="text-lg text-gray-600 mb-12">
        Thoughts on science, modeling, and fairness.
      </p>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="mb-2">
              <time className="text-sm text-gray-500">{post.date}</time>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 text-blue-600 font-medium">
              Read more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

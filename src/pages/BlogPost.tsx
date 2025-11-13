import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-sm text-gray-500">{post.date}</time>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 italic">{post.excerpt}</p>
        </header>

        <div className="prose prose-lg max-w-none">{post.content}</div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  )
}

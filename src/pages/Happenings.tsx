import { happenings } from '../data/happenings'

export default function Happenings() {
  // Sort by date, newest first
  const sortedHappenings = [...happenings].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12 sm:mb-16 text-center fade-in-warm">
        <div className="inline-block">
          <h1 className="text-5xl sm:text-6xl font-extralight text-gray-900 mb-4 tracking-tight text-depth">
            Happenings
          </h1>
          <div className="gold-accent mb-6 mx-auto max-w-xs sm:max-w-md"></div>
        </div>
      </div>

      {/* Posts Grid */}
      {sortedHappenings.length === 0 ? (
        <div className="text-center py-12 sm:py-20">
          <div className="premium-glass p-8 sm:p-12 rounded-sm inline-block max-w-lg">
            <p className="text-gray-600 font-light text-base sm:text-lg mb-4">
              No posts yet! Add your first post by editing:
            </p>
            <code className="text-xs sm:text-sm bg-amber-50 px-3 sm:px-4 py-2 rounded text-amber-900 font-mono block break-all">
              src/data/happenings.ts
            </code>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 stagger-elegant">
          {sortedHappenings.map((post, index) => (
            <article
              key={index}
              className="group luxury-card luxury-card-hover ambient-glow overflow-hidden rounded-sm"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-amber-50 to-stone-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3EImage not found%3C/text%3E%3C/svg%3E'
                  }}
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Date */}
                <time className="text-xs text-amber-700 font-light tracking-wider uppercase mb-2 sm:mb-3 block">
                  {formatDate(post.date)}
                </time>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-900 transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Instructions Footer */}
      {sortedHappenings.length > 0 && (
        <div className="mt-16 sm:mt-20 text-center">
          <div className="elegant-divider mb-6 sm:mb-8 mx-auto max-w-xs sm:max-w-md"></div>
          <p className="text-xs sm:text-sm text-gray-500 font-light italic px-4">
            To add more posts, edit <code className="text-xs bg-amber-50 px-2 py-1 rounded text-amber-900 font-mono">src/data/happenings.ts</code>
          </p>
        </div>
      )}
    </div>
  )
}

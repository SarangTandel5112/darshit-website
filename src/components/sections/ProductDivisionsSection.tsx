import { Link } from 'react-router-dom'
import { divisions } from '../../data/pavanity-data'

export default function ProductDivisionsSection() {
  return (
    <div className="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary">
      <div className="container-fluid">
        <div className="max-w-[1720px] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <h3 className="leading-none text-2xl md:text-3xl text-title dark:text-white font-semibold">
              Our Product Categories
            </h3>
            <p className="mt-3 text-title dark:text-white-light">
              Export supply across core food and agricultural ingredient categories.
            </p>
          </div>

          {/* 6 Product Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8" data-aos="fade-up" data-aos-delay="100">
            {divisions.map((division) => (
              <Link
                key={division.id}
                to={`/products/${division.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64 md:h-72 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={division.image}
                    alt={division.name}
                    className="w-full h-full object-cover transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback for placeholder images
                      e.currentTarget.src = 'https://via.placeholder.com/600x400?text=' + division.slug
                    }}
                  />
                </div>

                {/* Content */}
                <div className="pt-5 lg:pt-6">
                  <h4 className="font-semibold text-xl md:text-2xl text-title dark:text-white leading-none">
                    {division.name}
                  </h4>
                  <p className="mt-3 text-title dark:text-white-light">
                    {division.tagline}
                  </p>
                  <div className="mt-4 inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Explore Products
                    <span className="ml-1 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

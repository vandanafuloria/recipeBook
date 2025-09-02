import React from "react";
import { Link } from "react-router-dom"; // ✅ correct import

export default function Recipes({ recipes = [] }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header Section */}
      <div className="px-4 py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black mb-4">
          Discover the taste of happiness
        </h1>
        <p className="font-light italic text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
          Discover hand-picked recipes, from quick everyday meals to festive
          feasts — all in one place.
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`} // ✅ navigate without reload
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
                {/* Recipe Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Recipe Content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {recipe.name}
                  </h2>

                  {/* Recipe Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      {recipe.prepTimeMinutes && (
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                          </svg>
                          <span>{recipe.prepTimeMinutes}min</span>
                        </div>
                      )}

                      {recipe.servings && (
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                          <span>{recipe.servings}</span>
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    {recipe.rating && (
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-yellow-600 font-medium">
                          {recipe.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  {recipe.tags && recipe.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {recipe.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                      {recipe.tags.length > 2 && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{recipe.tags.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍳</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No recipes found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or check back later for new recipes!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
